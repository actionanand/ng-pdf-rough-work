import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  template: ` <nav>
    <h2 routerLink="/" class="link-hover">PDF Playground</h2>
    <ul>
      <li><a routerLink="/inbuilt-pdf" routerLinkActive="link-active" class="link-hover"> Browser PDF </a></li>
      <li><a routerLink="/inbuilt-blob" routerLinkActive="link-active" class="link-hover"> Browser PDF Blob </a></li>
      <li><a routerLink="/custom-pdf" routerLinkActive="link-active" class="link-hover"> NPM PDF </a></li>
    </ul>
  </nav>`,
  styles: [
    `
      nav {
        display: flex;
        justify-content: space-between;
        padding: 1rem 2rem;
        background: #cfd8dc;
      }
    `,
    `
      nav ul {
        display: flex;
        list-style: none;
      }
    `,
    `
      nav li {
        padding-left: 1rem;
      }
    `,
    `
      nav a {
        text-decoration: none;
        color: #0d47a1;
      }
    `,
    `
      .link-active {
        color: green !important;
      }
    `,
    `
      .link-hover:hover {
        cursor: pointer;
        color: white;
      }
    `,
    `
      /*
      Extra small devices (phones, 600px and down)
    */
      @media only screen and (max-width: 600px) {
        nav {
          flex-direction: column;
        }
        nav ul {
          flex-direction: column;
          padding-top: 0.5rem;
        }
        nav li {
          padding: 0.5rem 0;
        }
      }
    `,
  ],
})
export class NavBarComponent {}
