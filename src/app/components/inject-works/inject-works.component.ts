import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Subscription, first } from 'rxjs';

import { getHost } from '../../shared/functions/get-host';
import { createClassManager } from '../../shared/functions/class-manager';
import { getPlayers, getPlayers$ } from '../../shared/functions/player';
import { LOGGER_TOKEN } from '../../shared/constants/inject-constants';

@Component({
  selector: 'app-inject-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inject-works.component.html',
  styleUrls: ['./inject-works.component.scss'],
  providers: [
    {
      provide: LOGGER_TOKEN,
      useFactory: () => {
        const http = inject(HttpClient);
        return {
          log: (value: string) => {
            http.post('https://www.anandraja.com', { value }).pipe(first()).subscribe();
            console.log('Post request is sent: ', JSON.stringify(value));
          },
        };
      },
    },
  ],
})
export class InjectWorksComponent implements OnInit, OnDestroy {
  host = getHost<HTMLElement>();
  classManager = createClassManager(getHost(), 'red-color');

  logger = inject(LOGGER_TOKEN).log;

  players1: unknown[] = [];
  players2: unknown[] = [];

  unsubPlayers!: Subscription;

  constructor() {
    getPlayers().then((p) => {
      this.players1 = p;
      console.log('Players 1: ', this.players1);
    });

    this.unsubPlayers = getPlayers$().subscribe((p) => {
      this.players2 = p;
      console.log('Players 2', this.players2);
    });

    // const logger = inject(LOGGER_TOKEN).log;
    // logger('Hello AR');
  }

  ngOnInit(): void {}

  setFontColorAsRed() {
    this.classManager.add();
  }

  removeFontColor() {
    this.classManager.remove();
  }

  onReqPost() {
    this.logger('Hello AR');
  }

  ngOnDestroy(): void {
    this.unsubPlayers && this.unsubPlayers.unsubscribe();
  }
}
