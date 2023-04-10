import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

import { Observable, lastValueFrom, map } from 'rxjs';

import { environment } from '../../../environments/environment';

const PlayersUrl = environment.backend.players;

export function getPlayers(): Promise<any[]> {
  return lastValueFrom(
    inject(HttpClient)
      .get(PlayersUrl)
      .pipe(
        map((resp: any) => {
          return resp.data;
        }),
      ),
  );
}

export function getPlayers$(): Observable<any> {
  return inject(HttpClient)
    .get(PlayersUrl)
    .pipe(
      map((resp: any) => {
        return resp.data;
      }),
    );
}
