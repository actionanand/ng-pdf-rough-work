import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { getDocument, GlobalWorkerOptions, SVGGraphics, version } from 'pdfjs-dist';

import { getHost } from '../../../shared/functions/get-host';
import { pdfBase64 } from '../../../../assets/asset-file/sample-pdf-base64';
import { environment } from '../../../../environments/environment';

/*
  import { Inject, inject, ElementRef, ViewChild } from '@angular/core';
  import { DOCUMENT } from '@angular/common';
  import * as PDFJS from 'pdfjs-dist';
*/

@Component({
  selector: 'app-pdf-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-img.component.html',
  styleUrls: ['./pdf-img.component.scss'],
})
export class PdfImgComponent implements OnInit {
  @Input('pdfType') pdfImgSelection: string = 'svg';
  host = getHost<HTMLElement>();
  pdfurl!: string;

  /*
  document = inject(DOCUMENT);
  @ViewChild('pdf-canvas', { static: false}) canvas!: ElementRef;

    constructor(@Inject(DOCUMENT) private document: Document) {
      // ... other logics
      const context: any = this.canvas.nativeElement.getContext('2d');
      this.canvas.nativeElement.height = viewport.height;
      this.canvas.nativeElement.width = viewport.width;

      // or

      const canvas: any = this.document.getElementById('pdf-canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
    }
  */

  ngOnInit(): void {
    const pdfWorkerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.js`;
    GlobalWorkerOptions.workerSrc = pdfWorkerSrc;

    this.pdfurl = encodeURI(environment.backend.gitHubPdf);

    if (this.pdfImgSelection === 'svg') {
      this.loadPDFAsSVG();
    } else {
      this.loadPDFAsImg();
    }
  }

  loadPDFAsImg() {
    const pdfData = atob(pdfBase64);
    const loadingTask = getDocument({ data: pdfData });

    loadingTask.promise.then((pdf) => {
      console.log('pdf loaded into cache: ', pdf);

      // Fetch the first page
      const pageNumber = 1;
      pdf.getPage(pageNumber).then((page) => {
        console.log('first page is loaded');
        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        // Prepare canvas using PDF page dimensions
        const canvas: HTMLCanvasElement = this.host.querySelector('#pdf-canvas') as HTMLCanvasElement;
        const context: CanvasRenderingContext2D = canvas.getContext('2d')!;
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        const renderContext = {
          canvasContext: context,
          viewport,
        };

        const renderTask = page.render(renderContext);

        renderTask.promise.then(() => {
          if (pdf != null) pdf.destroy();
          console.log('PDF rendered in the canvas as image');
        });
      });
    });
  }

  async loadPDFAsSVG() {
    const loadingTask = getDocument(this.pdfurl);

    const pdf = await loadingTask.promise;
    console.log('pdf loaded: ', pdf);
    const pageNumber = 1;

    const page = await pdf.getPage(pageNumber);
    const scale = 1.5;
    const viewport = page.getViewport({ scale });

    const container: HTMLElement = this.host.querySelector('#pdf-svg') as HTMLElement;

    // Set dimensions
    container.style.width = viewport.width + 'px';
    container.style.height = viewport.height + 'px';

    // SVG rendering by PDF.js
    /*
    page
      .getOperatorList()
      .then((opList) => {
        const svgGfx = new SVGGraphics(page.commonObjs, page.objs);
        return svgGfx.getSVG(opList, viewport);
      })
      .then((svg) => {
        container.appendChild(svg);
      });
    */

    const opList = await page.getOperatorList();
    const svgGfx = new SVGGraphics(page.commonObjs, page.objs);
    const svg = await svgGfx.getSVG(opList, viewport);
    container.appendChild(svg);
    if (pdf != null) pdf.destroy();
    console.log('PDF rendered as svg');
  }
}
