# Building Palav Website

## Requirements
The Palav website is built using bootstrap, angular, firebase and wercker.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Update to Website
Updates to the website could be static content{text , images, videos} , or dynamic content which is data in firebase.

The main app components are in `src\app\{app.component.*}` files.
Individual app components are in `src\app\components\{*.component.*}` files.
Service components are in `src\app\service\{*.component.*}` files.

In order to update the static content you have to change the appropriate `app` component html.
For e.g. If you want to update the `home` section, update the `src\app\components\home\home.component.html`

In order to update the dynamic content you have to change the `service\*.ts` files.
The preloaded sample data is in the `data\palav.json` file.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Firebase
To deploy to firebase, you can manually deploy. You will need the firebase `cli` and the connection to the firebase `Palav` project hosted on `Firebase`

`firebase init`
`firebase deploy`

If you want to automatically deploy this to firebase, you just have to commit to git and you are all set. There is a wercker pipeline set to pick up code committed on git and push it to firebase.


## Functions in Firebase
https://github.com/firebase/functions-samples/blob/master/email-confirmation/README.md


## Further help
For further help on building and maintaining this website, reach out to Rajesh Jain <rjain15@gmail.com>
