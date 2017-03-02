import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { FleetService } from './fleet.service';
import { FleetEntry } from "./fleetEntry";

@Component({
  selector: 'my-fleet-detail',
  templateUrl: './fleet-detail.component.html',
  styleUrls: ['./fleet-detail.component.css']
})

export class FleetDetailComponent {
  @Input() fleetEntry: FleetEntry;

  constructor(
    private vesselService: FleetService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.vesselService.getHero(+params['imoNumber']))
      .subscribe(vessel => this.fleetEntry = vessel);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.vesselService.update(this.fleetEntry)
      .then(() => this.goBack());
  }
}

