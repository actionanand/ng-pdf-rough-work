import { Component } from '@angular/core';

import { pug } from '../../../assets/img/pug';
import { InjectWorksComponent } from '../../components/inject-works/inject-works.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [InjectWorksComponent],
  template: `
    <div class="home-wrap">
      <div class="pug-frame">
        <img [src]="imgData" alt="pug" class="repeating-linear" />
      </div>
      <div class="inject-comp">
        <app-inject-works></app-inject-works>
      </div>
    </div>
  `,
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
    `
      .home-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
      }
    `,
    `
      .inject-comp {
        padding: 0.6rem;
        margin: 0.6rem;
        border-radius: 4px;
        border: 1px solid teal;
        background: rgb(34, 193, 195);
        background: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(117, 202, 74, 0.5551470588235294) 100%);
      }
    `,
  ],
})
export class HomeComponent {
  imgData = pug;
}
