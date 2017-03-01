import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { FleetService } from './fleet.service';
import { FleetEntry } from "./fleetEntry";

@Component({
  selector: 'my-fleet-detail',
  template: `

    <div *ngIf="fleetEntry">
      <h2>{{fleetEntry.objectName}}</h2>
      <div><label>insuranceYear: </label>{{fleetEntry.insuranceYear}}</div>
      <div><label>coverNote: </label>{{fleetEntry.coverNote}}</div>
      <div><label>interest: </label>{{fleetEntry.interest}}</div>
      <div><label>clientNumber: </label>{{fleetEntry.clientNumber}}</div>
      <div><label>clientName: </label>{{fleetEntry.clientName}}</div>
      <div><label>peti: </label>{{fleetEntry.peti}}</div>
      <div><label>petiName: </label>{{fleetEntry.petiName}}</div>
      <div><label>fleetName: </label>{{fleetEntry.fleetName}}</div>
      <div><label>imoNumber: </label>{{fleetEntry.imoNumber}}</div>
      <div><label>objectName: </label>{{fleetEntry.objectName}}</div>
      <div><label>ccyCode: </label>{{fleetEntry.ccyCode}}</div>
      <div><label>insuranceValue: </label>{{fleetEntry.insuranceValue}}</div>
      <div><label>mainDeductible: </label>{{fleetEntry.mainDeductible}}</div>
      <div><label>netPremium: </label>{{fleetEntry.netPremium}}</div>
      <div><label>lohDailyAmount: </label>{{fleetEntry.lohDailyAmount}}</div>
      <div><label>lohDays: </label>{{fleetEntry.lohDays}}</div>
      <div><label>lohBasis: </label>{{fleetEntry.lohBasis}}</div>
    </div>
  <button (click)="goBack()">Back</button>
  <button (click)="save()">Save</button>
  `
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
    this.VesselService.update(this.vessel)
      .then(() => this.goBack());
  }
}

