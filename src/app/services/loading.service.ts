import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private defaultValue = true;
  private loadingSource = new BehaviorSubject(this.defaultValue);

  loading$ = this.loadingSource.asObservable();

  constructor() {}

  onChangeLoading(loading = false) {
    this.loadingSource.next(loading);
  }
}
