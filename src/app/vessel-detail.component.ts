/**
 * Created by E214595 on 24.02.2017.
 */
import { Component, Input } from '@angular/core';
import { Vessel } from './vessel';

@Component({
  selector: 'my-vessel-detail',
  template:`
<div *ngIf="vessel">
  <h2>{{vessel.name}} details</h2>
<div><label>id: </label>{{vessel.id}}</div>
<div>
  <label>name: </label>
<input [(ngModel)]="vessel.name" placeholder="name"/>
  </div>
  </div>`
})

export class VesselDetailComponent {
  @Input()
  vessel: Vessel;
}
