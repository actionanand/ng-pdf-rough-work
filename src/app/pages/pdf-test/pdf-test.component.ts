import { Component, inject, OnInit, VERSION } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

import { getDocument, GlobalWorkerOptions, version } from 'pdfjs-dist';

import { getHost } from '../../shared/functions/get-host';
import { pdfBase64 } from '../../../assets/asset-file/sample-pdf-base64';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-pdf-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-test.component.html',
  styleUrls: ['./pdf-test.component.scss'],
})
export class PdfTestComponent implements OnInit {
  pdfurl!: string;
  host = getHost<HTMLElement>();

  document = inject(DOCUMENT);

  constructor() {
    const pdfWorkerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.js`;
    GlobalWorkerOptions.workerSrc = pdfWorkerSrc;

    this.pdfurl = encodeURI(environment.backend.gitHubPdf);
  }

  ngOnInit(): void {
    this.loadPDF();
  }

  loadPDF() {
    const loadingTask = getDocument(this.pdfurl);

    loadingTask.promise.then((pdf) => {
      console.log('pdf loaded: ', pdf);

      // Get div#container and cache it for later use
      const container: HTMLElement = this.document.querySelector('#container') as HTMLElement;

      // Loop from 1 to total_number_of_pages in PDF document
      for (let i = 1; i <= pdf.numPages; i++) {
        pdf.getPage(i).then((page) => {
          let scale = 1.5;
          let viewport = page.getViewport({ scale });

          let div = document.createElement('div');

          // Set id attribute with page-#{pdf_page_number} format
          div.setAttribute('id', 'page-' + (page._pageIndex + 1));

          // This will keep positions of child elements as per our needs
          div.setAttribute('style', 'position: relative');

          container.appendChild(div);

          let canvas = document.createElement('canvas');

          // Append Canvas within div#page-#{pdf_page_number}
          div.appendChild(canvas);

          let context = canvas.getContext('2d')!;
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          let renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          // Render PDF page
          page.render(renderContext);
        });
      }

      // Fetch the first page
      // let pageNumber = 1;
      // pdf.getPage(pageNumber).then((page) => {
      //   console.log('first page is loaded');

      //   // Prepare canvas using PDF page dimensions
      //   // const context: CanvasRenderingContext2D = canvas.getContext('2d')!;
      //   // container.height = viewport.height;
      //   // container.width = viewport.width;

      //   // Render PDF page into canvas context
      //   // const renderContext = {
      //   //   canvasContext: context,
      //   //   viewport,
      //   // };

      //   // const renderTask = page.render(renderContext);

      //   // renderTask.promise.then(() => {
      //   //   if (pdf != null) pdf.destroy();
      //   //   console.log('Page rendered in the canvas as image');
      //   // });
      // });
    });
  }
}
