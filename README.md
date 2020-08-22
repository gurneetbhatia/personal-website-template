# Personal Website Template

This is a template Angular application designed for developer to customise and display their achievements and personal projects. The website that this project was based on is https://gurneetbhatia.me. You can check it out to see what the template would look like.

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

### The Home Page

The file relating to the Home Page component are located inside `src\app\pages\home`. These are the TypeScript component definition, the HTML template and the CSS design. Modifications for this page need to be made in the TypeScript and HTML files. In the HTML file, you can modify the content to make it read whatever you would like. The layout has already been defined.

In the TypeScript file, you need to look at the `ngOnInit` function in the `HomeComponent` class and modify the line that starts with 
```ts
this.dataService.getGitStats('your-username-goes-here')
```
You need to modify the string *"your-username-goes-here"* with your own GitHub username.
In addition to this, you may also want to modify the list of rotating text at the top of the `HomePage` component. You can do this by going into `src\app\common\rotate-text.directive.ts` and modifying the declaration of the `words` property in the constructor on `line 14`.

### The Projects Page

This page displays a list of projects that you have worked on. Clicking on any of the project cards takes you to the details page of that particular page. To customise the projects list and views, the only thing you need to do is fill up the following list with your own projects. The components have been defined to use this data, and the routing for each project is already setup. You don't need to do anything else. To customise the list of your projects, you need to go to the `src\app\common\data.ts` file and look at line 25 that starts with 
```ts
export const projects: Project[]
```
To properly understand the structure of each project object in this list, have a look at `src\app\pages\projects\project.ts`. According to this declaration, each project has the following properties:
```ts
id: string; // this is the route at which your project details will be stored. For example project id: "sqs" will be at localhost:4200/projects/sqs
title: string; // the title of the project displayed at the top of the project view and the project card component
description: string; // a short description of the project that is displayed in the project card component
date: string; // Can be any string that represents the date that you worked on this project
cardPhotoUrl: string; // the url or filepath at which the project cards' photo is stored
sections: Section[]; // a list of section objects that will be displayed in the project details view (defined below)
tech: string[]; // a list of the technologies that you used to build this application
projectLinks: ProjectLink[] // include any project links like GitHub repo, devpost, website,etc. relating to the project (defined below)
titlePhotoUrl?: string; // if provided, the photo displayed below the title in the project details view 
titleVideoUrl?: string; // if provided, the YouTube video below the title in the project details view
galleryImages?: GalleryImage[]; // if provided, a list of screenshots/images with descriptions relating to the project (defined below)
```
Over here, as you would notice, `titlePhotoUrl`, `titleVideoUrl`, and `galleryImages` are optional properties, but the rest of them are necessary to define a project.

A "Section" is something consists of a title and a list of paragraphs. You can provide a list of sections for each project and it will be displayed in the project view component. The structure of each project is as follows:
```ts
title: string;
text: string[];
```

For each project, you can also provide a list of Project Link objects that defines the text to display for each link and, of course, the link itself. The structure of this object is as follows:
```ts
text: string;
link: string;
```

For each project, you also have the ability to provide a list of relevant images or screenshots. Each such image also has an optional property for the text to describe it. This text is displayed below the image. The structure of this object is as follows:
```ts
photoUrl: string;
text?: string;
```

Now that we have covered each of the relevant classes for defining a project, here is an example project template (more are defined in the `data.ts` file that you can have a look at).
```ts
export const projects: Project[] = [
    {
        id: "ste",
        title: "Secure Text Editor",
        description: "Remake of Molecule outside of a hackathon environment with a different UI and fewer bugs",
        date: "April, 2020",
        cardPhotoUrl: "https://i.ibb.co/ZmkHJGn/main.png",
        sections: [
            {
                title: "Overview",
                text: [
                    "This application is a remake of Molecule outside of a hackathon environment with a different UI and fewer bugs. The idea behind the platform is to provide users with a text-editor or a minimalistic IDE that would enable them to write their code in an encrypted format to provide sourcecode leaks at big companies. Unlike Molecule, I decided to work with a simpler GUI development library with Python for this application called Tkinter since I am more familiar with it. I also managed to remove the bug we had with larger file sizes due to RSA encryption. RSA only supports fairly small text sizes for encryption due to padding, which is something my team did not anticipate while working on Molecule at the hackathon. I figured out that if we encrypted the users' source code using symmetric encryption and encrypted the symmetric key using asymmetric encryption (RSA), the application would finally be able to support larger file sizes. I also added a few other features that would make it appear more like a modern text-editor. You can see what it looks like in the gallery or try it out from GitHub. In terms of other functionality, it is pretty similar to Molecule so feel free to check that out too."
                ]
            }
        ],
        tech: [
            "Python",
            "Tkinter",
            "RSA Encryption",
            "Symmetric Encryption"
        ],
        projectLinks: [
            {
                link: "https://github.com/gurneetbhatia/enc-text-editor",
                text: "GitHub"
            }
        ],
        galleryImages: [
            {
                photoUrl: "https://i.ibb.co/5kk4rb4/org.png",
                text: "The login page that allows you to enter the credentials of an organisation"
            },
            {
                photoUrl: "https://i.ibb.co/BzN2dds/file-menu.png",
                text: "A menu for creating, saving, and loading encrypted or unencrypted files"
            },
            {
                photoUrl: "https://i.ibb.co/FxFg6gs/edit-menu.png",
                text: "A menu for editing the text in the file"
            },
            {
                photoUrl: "https://i.ibb.co/VjYKSSb/file-selector.png",
                text: "File selector"
            },
            {
                photoUrl: "https://i.ibb.co/Xx7fJ1r/loaded.png",
                text: "What an encrypted file looks like when loaded into the editor"
            }
        ]
    }
}
```
This is a simple projects list containing only one Project object but you can define as many as you would like.

### The Competitions Page

On this page you define the competitions and hackathons that you have participated in. You can also choose to mention any awards that you may have won on this page. The UI consists of a list of CompetitionCard components (define in `src\app\pages\competitions`) that use the data defined in `src\app\common\data.ts` just like for the projects. The list of competitions is defined at line 4, the one that starts with
```ts
export const competitions: Competition[]
```
To properly understand how to define each competition, we need to have a look at the definition of the Competition class, provided in `src\app\pages\competitions\competition.ts`. The structure of each competiton is as follows:
```ts
title: string; // title displayed for each competition/event
description: string; // a short description. no more than a couple of lines
date: string; // a date in any format that you would like
photoUrl?: string; // if provided, the photo displayed in the competition card
```
The `photoUrl` property is optional, but all others are necessary to define a `Competition` object. The following is an example declaration of the `competitions` list in the `data.ts` file. It only includes one object, but you can define as many as you would like.
```ts
export const competitions: Competition[]  = [
    {
        title: "Some hackathon",
        description: `What you did at this hackathon`,
        date: "April, 2020"
    },

    {
        title: "Some competition",
        description: `About the competition and your experience`,
        date: "March, 2020"
    },

    {
        title: "Some award",
        description: `About the award and its prestige (you can also add images like this)`,
        date: "March, 2020",
        photoUrl: "https://techcrunch.com/wp-content/uploads/2019/06/GettyImages-944060114.jpg?w=730&crop=1"
    }
]
```
