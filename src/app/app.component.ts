/* Router Component for NHC-POC */
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template:`
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/fleet">My fleet (mockup)</a>
    <a routerLink="/api">My fleet (http)</a>
    <a routerLink="/dashboard">Affected vessels</a>
    <a routerLink="/documents">Documents</a>
    <a routerLink="/map">Maps</a>
    <a routerLink="/pic">Photos</a>
    <a routerLink="/log">Message archive</a>
    <a routerLink="/activity">Activities</a>
    <a routerLink="/people">Contacts</a>
  </nav>
  <router-outlet></router-outlet>`
})

export class AppComponent
{
  // title = 'Claim &#8470; 170337';
  title = 'Claim No.170337';
}
