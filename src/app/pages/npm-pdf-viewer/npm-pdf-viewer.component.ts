import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';

import { Subscription } from 'rxjs';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

import { PdfService } from '../../services/pdf.service';
import { environment } from '../../../environments/environment';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  standalone: true,
  selector: 'app-npm-pdf-viewer',
  templateUrl: './npm-pdf-viewer.component.html',
  styleUrls: ['./npm-pdf-viewer.component.scss'],
  imports: [NgIf, PdfJsViewerModule, SpinnerComponent],
})
export class NpmPdfViewerComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('pdfViewerAutoLoad') pdfViewer: any;
  @ViewChild('externalPdfViewer') extPdfViewer: any;

  pdfUrl!: string;
  loading = true;
  pdfSub!: Subscription;
  // pdfAsset = 'my-sub-domain/path/assets/pdfjs';

  constructor(private pdfServ: PdfService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.pdfDownload();
  }

  openPdfInNewTab() {
    this.pdfDownload(true);
  }

  private pdfDownload(external = false) {
    this.pdfUrl = environment.backend.localPdf;

    this.pdfSub = this.pdfServ.downloadPdf$(this.pdfUrl).subscribe((resp: BlobPart) => {
      setTimeout(() => (this.loading = false), 2000);

      if (external) {
        this.extPdfViewer.pdfSrc = resp;
        this.extPdfViewer.refresh();
      } else {
        this.pdfViewer.pdfSrc = resp; // pdfSrc can be Blob or Uint8Array
        this.pdfViewer.refresh(); // Ask pdf viewer to load/refresh pdf
      }
    });
  }

  ngOnDestroy(): void {
    this.pdfSub && this.pdfSub.unsubscribe();
  }
}
