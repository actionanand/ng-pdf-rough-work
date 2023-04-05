import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: ` <app-nav-bar></app-nav-bar>
    <div class="jumbo-container">
      <router-outlet></router-outlet>
    </div>`,
  imports: [RouterModule, NavBarComponent],
})
export class AppComponent {}
