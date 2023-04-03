import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'pdfBlob',
})
export class PdfBlobPipe implements PipeTransform {
  constructor(private http: HttpClient) {}

  transform(url: string): Observable<string> {
    const blobUrlObs = this.http
      .get(url, { responseType: 'blob' })
      .pipe(map((blob: Blob) => URL.createObjectURL(blob)));

    return blobUrlObs;
  }
}
