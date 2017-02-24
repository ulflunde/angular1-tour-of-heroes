import { Component } from '@angular/core';
import { Vessel } from './vessel';

const FLEET: Vessel[] = [
  { imoNumber: 9155303, name: 'Merlin Arrow' },
  { imoNumber: 9182485, name: 'Stove Campbell' },
  { imoNumber: 9164184, name: 'Berge Atlantic' },
  { imoNumber: 9214147, name: 'Barcarena' },
  { imoNumber: 9228057, name: 'Bangor' },
  { imoNumber: 9223980, name: 'Tamarita' },
  { imoNumber: 9223992, name: 'Fermita' },
  { imoNumber: 9335020, name: 'Serpentine' },
  { imoNumber: 9734991, name: 'Spar Indus' },
  { imoNumber: 9585285, name: 'MSC Divina' }
];

@Component({
  selector: 'my-app',

  template:`
<h1>{{title}}</h1>
<h2>My Vessels</h2>
<ul class="heroes">
<li *ngFor="let vessel of heroes" [class.selected]="vessel === selectedHero" (click)="onSelect(vessel)">
    <span class="badge">{{vessel.imoNumber}}</span> {{vessel.name}}
</li>
</ul>
<my-vessel-detail [vessel]="selectedHero"></my-vessel-detail>
  `,

  styles: [`
  .selected {
    background-color: #CFFFDC !important;
    color: black;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #8fbf9c !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent {
  onSelect(hero: Vessel): void {
    this.selectedHero = hero;
  }

  title = 'List of Vessels';
  selectedHero: Vessel;
  heroes = FLEET;
}
