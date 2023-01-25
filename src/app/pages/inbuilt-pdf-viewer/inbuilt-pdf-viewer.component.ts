import { Component } from '@angular/core';

import { Subscription } from 'rxjs';

import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-inbuilt-pdf-viewer',
  templateUrl: './inbuilt-pdf-viewer.component.html',
  styleUrls: ['./inbuilt-pdf-viewer.component.scss'],
})
export class InbuiltPdfViewerComponent {
  pdfUrl!: string;
  loading = true;
  pdfSub!: Subscription;

  constructor(private pdfServ: PdfService) {}

  ngOnInit(): void {
    this.pdfUrl = 'api/v1/static/pdf/local';

    this.pdfSub = this.pdfServ.downloadPdf(this.pdfUrl).subscribe((resp: BlobPart) => {
      this.loading = false;
      const pdfBlob = new Blob([resp], { type: 'application/pdf' });
      this.pdfUrl = window.URL.createObjectURL(pdfBlob);
      // console.log('Pdf blob url: ', this.pdfUrl);
    });
  }

  ngOnDestroy(): void {
    this.pdfSub && this.pdfSub.unsubscribe();
  }
}
