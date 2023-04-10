import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subscription } from 'rxjs';

import { getHost } from '../../shared/functions/get-host';
import { createClassManager } from '../../shared/functions/class-manager';
import { getPlayers, getPlayers$ } from '../../shared/functions/player';

@Component({
  selector: 'app-inject-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inject-works.component.html',
  styleUrls: ['./inject-works.component.scss'],
})
export class InjectWorksComponent implements OnInit, OnDestroy {
  host = getHost<HTMLElement>();
  classManager = createClassManager(getHost(), 'red-color');

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
  }

  ngOnInit(): void {}

  setFontColorAsRed() {
    this.classManager.add();
  }

  removeFontColor() {
    this.classManager.remove();
  }

  ngOnDestroy(): void {
    this.unsubPlayers && this.unsubPlayers.unsubscribe();
  }
}
