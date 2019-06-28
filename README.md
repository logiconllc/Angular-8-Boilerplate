# Angular 8 Boilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.

## Get started

### Prerequistie


```shell

"node": "10.12.0",

"npm": "6.4.1",

"@angular/compiler-cli": "8.0.4"

```
### Clone the repo


```shell

git clone <repo-url>

cd <project-folder>

```
## File Structure
This is the new standard for developing Angular apps and a great way to ensure maintainable code. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs,  component class. Here's how it looks:
```
 ├──src/                           * our source files that will be compiled to javascript
 |   
 |   ├──index.html                 * Index.html: where we generate our index page
 │   │
 │   ├──app/                       * WebApp: folder
 |   |   ├──core/                         * Core: folder
 |   |   └──shared/                       * Shared: folder
 |   |        └──components/              * Shared Components
 |   |        └──directives         
 |   |        └──helpers
 |   |        └──models
 |   |        └──pipes
 |   |        ├──shared.module.ts         * Shared module file
 |   |   ├──featured/                 * Featured: folder
 │   │   ├──app.component.spec.ts     * a simple test of components in app.component.ts
 │   │   ├──app.module.ts             * app module file
 │   │   ├──app-routing.module.ts     * app module routing file
 │   │   └──app.component.ts          * app component file
 │   │
 │   └──assets/                    * static assets are served here
 │       ├──images/                * images folder

```

##Recommended Practices
* All the application wide styles must go into `src/styles.scss` and must start with a prefix `app-`
```scss
.app-width-100 {
  width: 100%;
}

.app-stick-bottom {
  position:absolute;
  bottom:0;
}
```
* Use Resolvers when navigating to a new route if that route requires an HTTP request to fetch data.
* Use Error-Handler Interceptor for handling HTTP errors. You can use any logic to show errors, for example, Toasters etc.
* Use Lazy loaded Modules.
* All Shared components must go into `src/shared`.
* All Services, Pipes, Directives must go into `src/core`.
* All application features must go into `src/features`.

##External Packages
* [tslint-microsoft-contrib](https://github.com/microsoft/tslint-microsoft-contrib) (You can remove this, if you want to, from `src/tslint.json` by removing `"tslint-microsoft-contrib/recommended"` from `extends` array).
* [Angular Material](https://material.angular.io/)
* [Angular Flex-Layout](https://github.com/angular/flex-layout)

## Development server

Run  `ng serve --open`  for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

`--open` flag will automatically redirect to specified port in browser.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
