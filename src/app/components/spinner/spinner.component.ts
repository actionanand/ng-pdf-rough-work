import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-spinner',
  styleUrls: ['./spinner.component.scss'],
  styles: [
    `
      .lds-ellipsis {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
    `,
  ],
  template: ` <div class="lds-ellipsis">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>`,
})
export class SpinnerComponent {}
