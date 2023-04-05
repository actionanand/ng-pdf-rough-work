import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

import { Subscription } from 'rxjs';

import { PdfService } from '../../services/pdf.service';
import { environment } from '../../../environments/environment';
import { SafePipe } from '../../shared/pipes/safe.pipe';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  standalone: true,
  selector: 'app-inbuilt-pdf-viewer',
  templateUrl: './inbuilt-pdf-viewer.component.html',
  styleUrls: ['./inbuilt-pdf-viewer.component.scss'],
  imports: [NgIf, SafePipe, SpinnerComponent],
})
export class InbuiltPdfViewerComponent implements OnInit, OnDestroy {
  pdfUrl!: string;
  loading = true;
  pdfSub!: Subscription;

  constructor(private pdfServ: PdfService) {}

  ngOnInit(): void {
    this.pdfUrl = environment.backend.localPdf;

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
