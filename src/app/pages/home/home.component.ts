import { Component } from '@angular/core';

import { pug } from '../../../assets/img/pug';

@Component({
  standalone: true,
  selector: 'app-home',
  template: ` <div class="pug-frame">
    <img [src]="imgData" alt="pug" class="repeating-linear" />
  </div>`,
  styles: [
    `
      .pug-frame {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 65vh;

        .repeating-linear {
          position: relative;
          margin: auto;
          border: 24px solid;
          border-image: url('../../../assets/img/ar-heart.svg');
          border-image-slice: 32;
          border-image-repeat: round;
        }
      }
    `,
  ],
})
export class HomeComponent {
  imgData = pug;
}
