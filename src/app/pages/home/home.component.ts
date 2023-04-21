import { Component, OnInit, Renderer2, inject } from '@angular/core';
// import { RendererStyleFlags2 } from '@angular/core';

import { pug } from '../../../assets/asset-file/pug';
import { arHeart } from '../../../assets/asset-file/ar-heart';
import { InjectWorksComponent } from '../../components/inject-works/inject-works.component';
import { getHost } from '../../shared/functions/get-host';

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
          border-image: url('../../../assets/img/ar-heart-red-animation.svg');
          border-image-slice: 32;
          border-image-repeat: round;

          &:hover {
            cursor: pointer;
            border-image: url('../../../assets/img/ar-heart-red-animation.svg') !important;
            border-image-slice: 32 !important;
            border-image-repeat: round !important;
          }
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
export class HomeComponent implements OnInit {
  imgData = pug;
  arHeartSvgData = arHeart;

  host = getHost<HTMLElement>();
  renderer = inject(Renderer2);

  ngOnInit(): void {
    // const flags = RendererStyleFlags2.DashCase | RendererStyleFlags2.Important;

    // A dirty trick to load the SVG into the document
    const blob = new Blob([this.arHeartSvgData], { type: 'image/svg+xml' });
    const svgUrl = URL.createObjectURL(blob);
    const borderImgUrl = `url(${svgUrl})`;

    this.renderer.setStyle(this.host.querySelector('.repeating-linear'), 'border-image-source', borderImgUrl);

    
    /*
    Through normal DI - setting style using `elementRef`
    (this.elRef.nativeElement.querySelector('.repeating-linear') as HTMLElement).style.borderImageSource = borderImgUrl;
    
    Through `inject` function DI - setting style using `elementRef` (function outsourced)
    (this.host.querySelector('.repeating-linear') as HTMLElement).style.borderImageSource = borderImgUrl;

    How to add `important` flag through TS
    this.renderer.setStyle(this.host.querySelector('.repeating-linear'), 'border-image-source', borderImgUrl, flags);
    */
  }
}
