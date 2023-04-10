import { Renderer2, inject } from '@angular/core';

export function createClassManager(el: HTMLElement, className: string) {
  const render = inject(Renderer2);

  return {
    add: () => render.addClass(el, className),
    remove: () => render.removeClass(el, className),
  };
}
