import { Component, OnDestroy, OnInit, VERSION, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Subscription } from 'rxjs';
import { version } from 'pdfjs-dist';

import { PdfImgComponent } from '../../components/PdfJs/pdf-img/pdf-img.component';
import { PdfFullComponent } from '../../components/PdfJs/pdf-full/pdf-full.component';
import { LoadingService } from '../../services/loading.service';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  selector: 'app-pdfjs',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, PdfImgComponent, PdfFullComponent, SpinnerComponent],
  styleUrls: ['./pdfjs.component.scss'],
  templateUrl: './pdfjs.component.html',
})
export class PdfjsComponent implements OnInit, OnDestroy {
  title = "This App's Angular version: " + VERSION.full + " and pdf.js's version: " + version;
  myPdf: string = 'svg';
  loading = true;
  sub!: Subscription;

  pdfPages = [
    { code: 'imgPdfFull', name: 'Full PDF' },
    { code: 'svg', name: 'SVG' },
    { code: 'image', name: 'PNG Image' },
  ];

  loadingServ = inject(LoadingService);

  ngOnInit(): void {
    this.sub = this.loadingServ.loading$.subscribe((spinner) => (this.loading = spinner));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
