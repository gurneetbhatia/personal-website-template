# Personal Website Template

This is a template Angular application designed for developer to customise and display their achievements and personal projects. The website that this project was based on is https://gurneetbhatia.me.

## Installing Angular

To run this project and be able to fully customise the UI too, you will need to install Angular and its CLI. You can follow the instructions for this on https://angular.io/guide/setup-local. If you have not already installed it, you will also need `npm` installed on your system.

## Installing node modules

Before you can get started with this project, you will have to install the necessary packages. If you are using npm, you can use `npm install` from a terminal after going into the project directory. If you prefer yarn, you can simply type `yarn` or `yarn install`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. If you would like to use `npm` or `yarn` to manage your project commands, you can also use `npm start` or `yarn start`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Customising the content

### The index file

Like any other Angular app, the index file by itself contains very minimal content. I would recommend changing the title to include your name instead of **"TemplateWebsite"**
```html
<title>TemplateWebsite</title>
```
Filepath for the index file: `src\index.html`.
You can also modify the logo showed in the tab next to the website title by replacing `src\favicon.ico` with your own file. If you do this, you need to make sure that the file you replace it with is also called `favicon.ico`.
