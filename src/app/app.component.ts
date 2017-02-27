import { Component } from '@angular/core';
import { VesselService } from './vessel.service';
import { OnInit } from '@angular/core';

export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  }
}

@Component({
  selector: 'my-app',

  template:`
<h1>{{title}}</h1>
<h2>My Vessels</h2>
<ul class="heroes">
<li *ngFor="let vessel of ships" [class.selected]="vessel === selectedShip" (click)="onSelect(vessel)">
    <span class="badge">{{vessel.imoNumber}}</span> {{vessel.name}}
</li>
</ul>
<my-vessel-detail [vessel]="selectedShip"></my-vessel-detail>
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
`],
  providers: [VesselService]
})

export class AppComponent {
  ships: Vessel[];

  getHeroes(): void {
    this.ships = this.vesselService.getShips();
  }

  onSelect(hero: Vessel): void {
    this.selectedShip = hero;
  }

  title = 'List of Vessels';
  selectedShip: Vessel;
  ships = FLEET;
  constructor(private vesselService: VesselService) { }
}
