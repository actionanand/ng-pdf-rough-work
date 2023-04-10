import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor(private http: HttpClient) {}

  downloadPdf$(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      map((result: Blob) => {
        return result;
      }),
    );
  }

  downloadPdfBlobUrl$(url: string): Observable<string> {
    const obs = this.http.get(url, { responseType: 'blob' }).pipe(
      map((val: Blob) => {
        return URL.createObjectURL(new Blob([val], { type: 'application/pdf' }));
      }),
    );

    return obs;
  }
}
