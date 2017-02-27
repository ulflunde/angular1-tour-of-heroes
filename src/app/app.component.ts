import { Component } from '@angular/core';

@Component({
  selector: 'my-app',

  template:`
  <h1>{{title}}</h1>
  <my-vessels></my-vessels>
  `
})

export class AppComponent
{
  title = 'Fleet details';
}
