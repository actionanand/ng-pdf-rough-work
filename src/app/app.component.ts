import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, NavBarComponent],
  template: ` <app-nav-bar></app-nav-bar>
    <div class="jumbo-container">
      <router-outlet></router-outlet>
    </div>`,
  styles: [
    `
      .jumbo-container {
        padding: 1rem 2rem;
      }
    `,
    `
      @media only screen and (max-width: 600px) {
        .jumbo-container {
          padding: 0.8rem 0;
        }
      }
    `,
  ],
})
export class AppComponent {}
