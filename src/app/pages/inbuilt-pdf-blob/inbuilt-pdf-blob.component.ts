import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-inbuilt-pdf-blob',
  templateUrl: './inbuilt-pdf-blob.component.html',
  styleUrls: ['./inbuilt-pdf-blob.component.scss'],
})
export class InbuiltPdfBlobComponent implements OnInit, OnDestroy {
  pdfUrl!: string;
  pdfBlobUrl!: string;
  loading = true;
  pdfSub!: Subscription;

  constructor(private pdfServ: PdfService) {}

  ngOnInit(): void {
    this.pdfUrl = 'api/v1/static/pdf/remote';

    this.pdfSub = this.pdfServ.downloadPdf(this.pdfUrl).subscribe((resp: BlobPart) => {
      this.loading = false;
      const pdfBlob = new Blob([resp], { type: 'application/pdf' });
      this.pdfBlobUrl = window.URL.createObjectURL(pdfBlob);
      // console.log('Pdf blob url: ', this.pdfBlobUrl);
    });
  }

  ngOnDestroy(): void {
    this.pdfSub && this.pdfSub.unsubscribe();
  }
}
