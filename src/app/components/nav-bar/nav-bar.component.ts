import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NavBarLinks } from '../../shared/constants/nav-bar-links';
import { NavBarLinks as NavModel } from '../../models/general.model';

@Component({
  standalone: true,
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, NgFor],
  styleUrls: ['./nav-bar.component.scss'],
  template: `<nav>
    <ng-container *ngFor="let nav of NavBarLinks[0].navbar">
      <h2 routerLink="/" class="link-hover">{{ nav.label }}</h2>
      <ul>
        <li *ngFor="let link of nav.values">
          <a [routerLink]="link.value" routerLinkActive="link-active" class="link-hover"> {{ link.label }} </a>
        </li>
      </ul>
    </ng-container>
  </nav>`,
})
export class NavBarComponent {
  readonly NavBarLinks: NavModel[] = NavBarLinks;
}
