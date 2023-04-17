import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  styleUrls: ['./nav-bar.component.scss'],
  template: ` <nav>
    <h2 routerLink="/" class="link-hover">PDF Playground</h2>
    <ul>
      <li><a routerLink="/inbuilt-pdf" routerLinkActive="link-active" class="link-hover"> Browser PDF </a></li>
      <li><a routerLink="/inbuilt-blob" routerLinkActive="link-active" class="link-hover"> Browser PDF Blob </a></li>
      <li><a routerLink="/custom-pdf" routerLinkActive="link-active" class="link-hover"> NPM PDF </a></li>
      <li><a routerLink="/pdfjs" routerLinkActive="link-active" class="link-hover"> Mozilla Pdf </a></li>
    </ul>
  </nav>`,
})
export class NavBarComponent {}
