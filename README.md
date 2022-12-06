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
est-ce que _partials_ est une convention ? 
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

# Routes
Les routes sont des composant qui change en fonction de l'url d'appel. 
- une route "MatchList" repondra au / 
- une route "MatchDetail" repondra au /matches/:id
## creation des composants routes
est-ce que _resources_ est une convention ? 
~~~
ng g c resources/matches/match-detail
ng g c resources/matches/match-list
~~~
## déclaration des routes 
Ajouter un fichier app.routes.ts. 
~~~
import { Routes } from "@angular/router";
import { MatchListComponent } from "./resources/matches/match-list/match-list.component";
import { MatchDetailComponent } from "./resources/matches/match-detail/match-detail.component";
export const appRoutes: Routes = [
    {
        path: '', 
        component: MatchListComponent
    },
    { 
        path: 'matches/:id', 
        component: MatchDetailComponent 
    }
]
~~~
## import à l'aide du module RouterModule
importer les routes dans le fichier app.module.ts. Il fau modifier le noeu imports comme suit : 
~~~
imports: [BrowserModule, RouterModule.forRoot(appRoutes)]
~~~
## modification de la page principal (app.component.html)
modifier comme suit : 
~~~
<app-header></app-header> 
<router-outlet></router-outlet> 
<div>Html fix</div>
~~~
## résulat
La page web est composé de 
- header avec le composant header. 
- une partie variable avec le module router qui change en fonction de nos route
- une partie fix avec le div

### appel à / 
si j'ouvre la page http://localhost:4200/ j'ai le résultat : 
~~~
header works!
match-list works!
Html fix
~~~
### appel à /matches/foo
si j'ouvre la page http://localhost:4200/matches/foo j'ai le résultat : 
~~~
header works!
match-detail works!
footer
~~~


