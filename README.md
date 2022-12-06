# Tuto
Tuto original : https://blog.buddyweb.fr/tutoriel-creer-une-application-basique-avec-angular/
## installation engular cli 
~~~ 
npm install -g @angular/cli 
~~~
## initilisation du projet
~~~ 
ng new angular-tutorial 
~~~
## lancement du serveur 
~~~ 
ng serve 
~~~
## configuration de sass
Dans Angular.json :
Ce point est ko a la generation d'un composant. Donc je reverte, peut etre car j'ai pas fais la partie bulma.
~~~
"schematics": {        
  "@schematics/angular:component": {          
    "styleext": "scss"        
  }
}
~~~
# bulma
Je zappe cette partie

# composant
## Creation d'un composant header 
Le _partials_ n'est pas uen convention. 
~~~
ng g c partials/header
ou 
ng generate component partials/header
~~~
## Ajout dans le app.component.html
(equivalent du index.html)
~~~
<app-header></app-header>
~~~






# AngularTutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
