/**
 * Created by E214595 on 27.02.2017.
 */
import { Component } from '@angular/core';
import { Vessel } from './vessel';
import { VesselService } from './vessel.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-vessels',
  templateUrl: './fleet.component.html',
  styleUrls: [ './fleet.component.css' ]
})

export class FleetComponent implements OnInit {
  ships: Vessel[];
  selectedShip: Vessel;

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Vessel): void {
    this.selectedShip = hero;
  }

  getHeroes(): void {
    this.VesselService.getShipsMockSlowly().then(ships => this.ships = ships);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedShip.imoNumber]);
  }

  constructor(
    private router: Router,
    private VesselService: VesselService) { }
}
