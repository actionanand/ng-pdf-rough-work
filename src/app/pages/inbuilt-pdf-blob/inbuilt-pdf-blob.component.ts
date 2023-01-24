import { Component, OnInit } from '@angular/core';

import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-inbuilt-pdf-blob',
  templateUrl: './inbuilt-pdf-blob.component.html',
  styleUrls: ['./inbuilt-pdf-blob.component.scss'],
})
export class InbuiltPdfBlobComponent implements OnInit {
  pdfUrl!: string;
  loading = true;

  constructor(private pdfServ: PdfService) {}

  ngOnInit(): void {
    this.pdfUrl = 'api/v1/static/pdf/local';

    this.pdfServ.downloadPdf(this.pdfUrl).subscribe((resp: BlobPart) => {
      this.loading = false;
      const pdfBlob = new Blob([resp], { type: 'application/pdf' });
      this.pdfUrl = window.URL.createObjectURL(pdfBlob);

      console.log(this.pdfUrl);
    });
  }
}
