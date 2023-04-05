import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  styleUrls: ['./spinner.component.scss'],
  template: ` <div class="lds-ellipsis">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>`,
})
export class SpinnerComponent {}
