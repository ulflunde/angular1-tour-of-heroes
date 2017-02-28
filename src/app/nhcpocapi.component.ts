/**
 * Created by E214595 on 28.02.2017.
 */
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FleetEntry } from './fleetEntry';
import { FleetService } from './fleet.service';

@Component({
  moduleId: module.id,
  selector: 'my-nhcpocapi',
  templateUrl: './nhcpocapi.component.html',
  styleUrls: [ './nhcpocapi.component.css' ]
})

export class NhcpocapiComponent implements OnInit {
  ships: FleetEntry[];
  selectedShip: FleetEntry;
  constructor(
    private router: Router,
    private fleetService: FleetService) { }

  ngOnInit(): void {
    this.getFleet();
  }

  onSelect(hero: FleetEntry): void {
    this.selectedShip = hero;
  }

  getFleet(): void {
    this.fleetService.getFleet().then(ships => this.ships = ships);
  }

  gotoDetail(): void {
    this.router.navigate(['/shipdetail', this.selectedShip.imoNumber]);
  }
}
