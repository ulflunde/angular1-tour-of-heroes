/**
 * Created by E214595 on 27.02.2017.
 */
import { Component, OnInit } from '@angular/core';
import { Vessel } from './vessel';
import { VesselService } from './vessel.service';

@Component({
  // moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  affectedShips: Vessel[] = [];

  constructor(private VesselService: VesselService) { }

  ngOnInit(): void {
    this.VesselService.getShips()
      .then(affectedShips => this.affectedShips = affectedShips.slice(4, 7));
  }
}
