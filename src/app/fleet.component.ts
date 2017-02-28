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
  constructor(
    private router: Router,
    private VesselService: VesselService) { }

  ngOnInit(): void {
    this.getFleet();
  }

  onSelect(hero: Vessel): void {
    this.selectedShip = hero;
  }

  getHeroes(): void {
    this.VesselService.getShipsMockSlowly().then(ships => this.ships = ships);
  }

  getMockFleet(): void {
    this.VesselService.getShipsMockSlowly().then(ships => this.ships = ships);
  }

  getFleetSlowly(): void {
    this.VesselService.getShipsSlowly().then(ships => this.ships = ships);
  }

  getFleet(): void {
    this.VesselService.getShips().then(ships => this.ships = ships);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedShip.imoNumber]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.VesselService.create(name)
      .then(hero => {
        this.ships.push(hero);
        this.selectedShip = null;
      });
  }

  delete(hero: Vessel): void {
    this.VesselService
      .delete(hero.id)
      .then(() => {
        this.ships = this.ships.filter(h => h !== hero);
        if (this.selectedShip === hero) { this.selectedShip = null; }
      });
  }
}
