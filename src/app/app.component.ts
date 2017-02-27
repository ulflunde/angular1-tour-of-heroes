/* Router Component for NHC-POC */
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  styleUrls: ['./app.component.css'],

  template:`
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard">Claim &#8470; 170337</a>
    <a routerLink="/fleet">Fleet</a>
  </nav>
  <router-outlet></router-outlet>`
})

export class AppComponent
{
  title = 'Fleet details';
}
