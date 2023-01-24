import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor(private http: HttpClient) {}

  downloadPdf(url: string): any {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      map((result: any) => {
        return result;
      }),
    );
  }
}
