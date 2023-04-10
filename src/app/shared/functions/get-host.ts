import { ElementRef, inject } from '@angular/core';

export function getHost<T>(): T {
  return inject(ElementRef<T>).nativeElement;
}
