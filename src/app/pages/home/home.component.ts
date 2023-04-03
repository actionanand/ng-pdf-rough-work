import { Component } from '@angular/core';

import { pug } from '../../../assets/img/pug';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  imgData = pug;
}
