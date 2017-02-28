/**
 * Created by E214595 on 27.02.2017.
 */
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DashboardComponent }    from './dashboard.component';

import { FleetComponent }        from './fleet.component';
import { VesselDetailComponent } from './vessel-detail.component';

import { NhcpocapiComponent }    from './nhcpocapi.component';
import { FleetDetailComponent }  from './fleet-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:imoNumber', component: VesselDetailComponent },
  { path: 'shipdetail/:imoNumber', component: FleetDetailComponent },
  { path: 'fleet',     component: FleetComponent },
  { path: 'api',       component: NhcpocapiComponent },
  { path: 'documents', component: NhcpocapiComponent },
  { path: 'map',       component: NhcpocapiComponent },
  { path: 'pic',       component: NhcpocapiComponent },
  { path: 'log',       component: NhcpocapiComponent },
  { path: 'activity',  component: NhcpocapiComponent },
  { path: 'people',    component: NhcpocapiComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
