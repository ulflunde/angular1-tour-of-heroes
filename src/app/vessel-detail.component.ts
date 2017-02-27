/**
 * Created by E214595 on 24.02.2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import { Vessel } from './vessel';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { VesselService } from './vessel.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-vessel-detail',
  templateUrl: './vessel-detail.component.html',
  moduleId: module.id
})

export class VesselDetailComponent implements OnInit {
  @Input()
  vessel: Vessel;

  constructor(
    private VesselService: VesselService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.VesselService.getHero(+params['imoNumber']))
      .subscribe(vessel => this.vessel = vessel);
  }

  goBack(): void {
    this.location.back();
  }
}
