# Building Illuminate Stories Website

## Requirements
The Illuminate Stories website is built using bootstrap, angular, firebase and wercker.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Update to Website
Updates to the website could be static content{text , images, videos} , or dynamic content which is data in firebase.

The main app components are in `src\app\{app.component.*}` files.
Individual app components are in `src\app\components\{*.component.*}` files.
Service components are in `src\app\service\{*.component.*}` files.

## Themes
Themes are in `assets\v3\{js,img,css,less,vendor}` and `assets\v4\{js,img,css,less,vendor}`
We are using themes from `http://startbootstrap.com` website and the theme we are using is from
`https://github.com/BlackrockDigital/startbootstrap-creative`

In order to get the new version of the theme, you have to git clone the theme repo, to the build of the theme using `gulp`. This will create/update the `js, img, css, less, vendor ` directories.

Note: This app has dependency on popper.js and jquery-easing.js, which needs to be installed seperatly in the assets\vendor folder.

Static Images are stored in `assets\img`. In case you want to add new static images, drop them in the `assets\img` folder.



## Data and Services
Data for the website is either in `firebase` or `data\{article-data.json,catalog-data.json}`

## Changing Component content
In order to update the static content you have to change the appropriate `app` component html.
For e.g. If you want to update the `home` section, update the `src\app\components\home\home.component.html`


In order to update the dynamic content you have to change the `service\*.ts` files.
The preloaded sample data is in the `data\{contactus-data.json,eventsinfo-data.json,inventory-data.json}` file.

Favicon is favicon.ico

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
To deploy to firebase, you can manually deploy. You will need the firebase `cli` and the connection to the firebase `IlluminateStories` project hosted on `Firebase`

`firebase init`
`firebase deploy`

If you want to automatically deploy this to firebase, you just have to commit to git and you are all set. There is a wercker pipeline set to pick up code committed on git and push it to firebase.


## Functions in Firebase
In order to deploy functions in firebase, you have to use the firebase cli
https://github.com/firebase/functions-samples/blob/master/email-confirmation/README.md

`firebase init`
`firebase functions:config:set gmail.email="email address" gmail.password="app password"`
`cd functions; npm install; cd ..`
`firebase deploy --only functions`

## Further help
For further help on building and maintaining this website, reach out to Rajesh Jain <rjain15@gmail.com>
