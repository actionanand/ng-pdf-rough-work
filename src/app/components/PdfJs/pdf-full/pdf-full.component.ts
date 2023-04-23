import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

import { getDocument, GlobalWorkerOptions, version } from 'pdfjs-dist';

import { getHost } from '../../../shared/functions/get-host';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-pdf-full',
  standalone: true,
  imports: [CommonModule],
  template: `<div id="container"></div>`,
  styles: [
    `
      #container {
        height: 85vh;
        overflow: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
      }
    `,
  ],
})
export class PdfFullComponent implements OnInit {
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

  async loadPDF() {
    const loadingTask = getDocument(this.pdfurl);

    const pdf = await loadingTask.promise;
    console.log('full pdf loaded: ', pdf);

    // Get div#container and cache it for later use
    const container: HTMLElement = this.document.querySelector('#container') as HTMLElement;

    // Loop from 1 to total_number_of_pages in PDF document
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const scale = 1.5;
      const viewport = page.getViewport({ scale });
      const div = document.createElement('div');

      // Set id attribute with page-#{pdf_page_number} format
      div.setAttribute('id', 'page-' + (page._pageIndex + 1));

      // This will keep positions of child elements as per our needs
      div.setAttribute('style', 'position: relative');
      container.appendChild(div);

      const canvas = document.createElement('canvas');

      // Append Canvas within div#page-#{pdf_page_number}
      div.appendChild(canvas);

      const context = canvas.getContext('2d')!;
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      // Render PDF page
      page.render(renderContext);
    }
  }
}
