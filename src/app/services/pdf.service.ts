import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  // constructor(private http: HttpClient) {}

  private http = inject(HttpClient);

  downloadPdf(url: string): Observable<Blob> {
    return inject(HttpClient)
      .get(url, { responseType: 'blob' })
      .pipe(
        map((result: Blob) => {
          return result;
        }),
      );
  }

  getPlayersAsPromise(url: string): Promise<Blob> {
    return lastValueFrom(
      inject(HttpClient)
        .get(url, { responseType: 'blob' })
        .pipe(
          map((result: Blob) => {
            return result;
          }),
        ),
    );
  }

  downloadPdfBlobUrl(url: string): Observable<string> {
    const obs = this.http.get(url, { responseType: 'blob' }).pipe(
      map((val: Blob) => {
        return URL.createObjectURL(new Blob([val], { type: 'application/pdf' }));
      }),
    );

    return obs;
  }
}
