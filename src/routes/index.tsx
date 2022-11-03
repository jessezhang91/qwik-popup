import { component$, useClientEffect$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export function openPopup() {
  window.open('https://qwik.builder.io/', '_blank', 'popup=true,width=300,height=200');
}

export default component$(() => {
  const buttonRef = useSignal<HTMLElement>();

  useClientEffect$(({ track }) => {
    track(() => buttonRef.value);
    if (buttonRef.value == null) {
      return;
    }

    buttonRef.value.addEventListener('click', () => openPopup());
  });

  return (
    <div>
      <button onClick$={() => openPopup()}>Open Popup w/ QRL</button>

      <button ref={buttonRef}>Open Popup w/ Ref</button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
