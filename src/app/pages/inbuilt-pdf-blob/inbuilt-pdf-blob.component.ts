import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

import { Subscription } from 'rxjs';

import { PdfService } from '../../services/pdf.service';
import { environment } from '../../../environments/environment';
import { SafePipe } from '../../shared/pipes/safe.pipe';
import { PdfBlobPipe } from '../../shared/pipes/pdf-blob.pipe';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  standalone: true,
  selector: 'app-inbuilt-pdf-blob',
  templateUrl: './inbuilt-pdf-blob.component.html',
  styleUrls: ['./inbuilt-pdf-blob.component.scss'],
  imports: [NgIf, AsyncPipe, SafePipe, PdfBlobPipe, SpinnerComponent],
})
export class InbuiltPdfBlobComponent implements OnInit, OnDestroy {
  pdfUrl!: string;
  pdfBlobUrl!: string;
  loading = true;
  pdfSub!: Subscription;

  constructor(private pdfServ: PdfService) {}

  ngOnInit(): void {
    this.pdfUrl = environment.backend.remotePDF;

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
