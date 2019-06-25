# Angular 8 Boilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

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
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
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

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
