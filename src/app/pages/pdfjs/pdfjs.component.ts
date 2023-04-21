import { Component, ElementRef, inject, OnInit, VERSION, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { getDocument, GlobalWorkerOptions, version } from 'pdfjs-dist';

import { getHost } from '../../shared/functions/get-host';
import { pdfBase64 } from '../../../assets/asset-file/sample-pdf-base64'

/*
  import { Inject } from '@angular/core';
  import { DOCUMENT } from '@angular/common';
  import * as PDFJS from 'pdfjs-dist';
*/

@Component({
  selector: 'app-pdfjs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>{{ title }}</p>
    <canvas id="pdf-canvas"></canvas>
  `,
})
export class PdfjsComponent implements OnInit {
  host = getHost<HTMLElement>();

  title = "This App's Angular version: " + VERSION.full + " and pdf.js's version: " + version;
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

    this.pdfurl = encodeURI('https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK');

    // this.loadPDF(); // it also does the same work as `loadPDFAsAsync`
    this.loadPDFAsAsync()
  }

  loadPDF() {
    const loadingTask = getDocument(this.pdfurl);

    loadingTask.promise.then((pdf) => {
      console.log('pdf loaded: ', pdf);

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
          console.log('Page rendered in the canvas as image');
        });
      });
    });
  }

  async loadPDFAsAsync() {
    const pdfData = atob(pdfBase64);
    // const loadingTask = getDocument({ data: pdfData});
    // const loadingTask = getDocument(this.pdfurl);
    const loadingTask = getDocument('https://raw.githubusercontent.com/actionanand/ng-pdf-rough-work/2-pdf-js-design/src/assets/file/hi-anand.pdf');
    const pdf = await loadingTask.promise;
    console.log('pdf loaded: ', pdf);
    const pageNumber = 1;
    const page = await pdf.getPage(pageNumber);
    const scale = 1.5;
    const viewport = page.getViewport({ scale });

    const canvas: HTMLCanvasElement = this.host.querySelector('#pdf-canvas') as HTMLCanvasElement;
    const context: CanvasRenderingContext2D = canvas.getContext('2d')!;
    canvas.height = viewport.height;
    canvas.width = viewport.width;
   
    const renderContext = {
      canvasContext: context,
      viewport,
    };

    const renderTask = page.render(renderContext);
    await renderTask.promise;
    console.log('Page rendered in the canvas as image');
  }
}
