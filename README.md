# NgPdfRoughWork

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Troubleshooting

> If PDF not displayed at local, please run the below line

```bash
npm run copy-pdf-assets
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Source

- [How to Animate a SVG with border-image](https://css-tricks.com/how-to-animate-a-svg-with-border-image/)
- [All You Need to Know About Angular Proxy Configuration](https://javascript.plainenglish.io/all-you-need-to-know-about-angular-proxy-configuration-a1aeb2d8c86)
- [Angular PDFJS viewer with Mozilla's ViewerJS.](https://github.com/intbot/ng2-pdfjs-viewer)
- [getting cors error trying to use pdf url links - CORS opened pdf link](https://github.com/FranckFreiburger/vue-pdf/issues/273#issuecomment-838953439)
- [HTTP in a standalone Angular application with provideHttpClient](https://blog.ninja-squad.com/2022/11/09/angular-http-in-standalone-applications/)
- [Angular Inject Function: A New Way To Work With DI](https://www.henriquecustodia.dev/posts/angular-inject-function:-a-new-way-to-work-with-di/)
- [Using the Inject Function in Angular 15](https://www.danywalls.com/using-the-inject-function-in-angular-15)
- [Why Angular 14’s new inject() function is so amazing?](https://codereacter.medium.com/why-angular-14s-new-inject-function-is-so-amazing-ac281e7148d1)
- [Angular Providers: UseClass, UseValue, UseFactory & UseExisting](https://www.tektutorialshub.com/angular/angular-providers/)

## What is the `inject()` function

> The `inject()` function takes an InjectionToken as a parameter and returns the value for that InjectionToken from the currently active injector. Basically, it’s another way to get a hold of a dependency other than using constructor injection.

> In practice the `inject()` calls are allowed in a constructor, a constructor parameter and a field initializer.

```typescript
export class AppComponent implements OnInit {
  changeDetectorRef = inject(ChangeDetectorRef); // it works

  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef); // it works
  }

  ngOnInit() {
    const changeDetectorRef = inject(ChangeDetectorRef); // it throws an error
  }
}
```

```typescript
providers: [
  {
    provide: GREETINGS,
    useFactory: () => {
      const userInfo = inject(UserInfo); // works
      return `Hello, ${userInfo.name}!`;
    },
  },
];
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
