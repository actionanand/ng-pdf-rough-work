import { Component, VERSION } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { version } from 'pdfjs-dist';

import { PdfImgComponent } from '../../components/PdfJs/pdf-img/pdf-img.component';
import { PdfFullComponent } from '../../components/PdfJs/pdf-full/pdf-full.component';

@Component({
  selector: 'app-pdfjs',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, PdfImgComponent, PdfFullComponent],
  styleUrls: ['./pdfjs.component.scss'],
  templateUrl: './pdfjs.component.html',
})
export class PdfjsComponent {
  title = "This App's Angular version: " + VERSION.full + " and pdf.js's version: " + version;

  myPdf: string = 'svg';
  pdfPages = [
    { code: 'imgPdfFull', name: 'Full PDF' },
    { code: 'svg', name: 'SVG' },
    { code: 'image', name: 'PNG Image' },
  ];
}
