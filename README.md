# RetailBankMgmt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.
This Angular APP is used as front-end for the BankAPI (Link here: https://github.com/Bittu12345/BANKAPI ) following the Angular dependency injection and services for calling the WEBAPI.
There is authenticate service which authenticates the user when logging in. And shows the USER-Interface based on the role of the user logged in. And token is set in the localstorage after the successfull login and this token is used for sending the requests to the WEBAPI with that token.
The Admin will be able to perform the All the CRUD operations on the customer and CRUD operations on the account as well. While the Cashier will be able to perform the 'Update'
operation on the Account of the Customer.
After logging out the Local-storage will be cleared and user will be needing to log back in to request the webapi.
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
