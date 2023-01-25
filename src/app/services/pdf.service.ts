import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor(private http: HttpClient) {}

  downloadPdf(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      map((result: any) => {
        return result;
      }),
    );
  }
}
