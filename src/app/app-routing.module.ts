/**
 * Created by E214595 on 27.02.2017.
 */
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DashboardComponent }    from './dashboard.component';
import { DocumentsComponent }    from './documents.component';
import { PhotosComponent }       from './photos.component';

import { FleetComponent }        from './fleet.component';
import { VesselDetailComponent } from './vessel-detail.component';

import { NhcpocapiComponent }    from './nhcpocapi.component';
import { FleetDetailComponent }  from './fleet-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent }, // Affected vessels
  { path: 'fleet',     component: FleetComponent },      // My fleet (mockup)
  { path: 'nhcapi',    component: NhcpocapiComponent },  // My fleet (http)
  { path: 'documents', component: DocumentsComponent },  // Documents
  { path: 'pic',       component: PhotosComponent },     // Photos
  { path: 'map',       component: NhcpocapiComponent },  // Maps
  { path: 'log',       component: NhcpocapiComponent },  // Message archive
  { path: 'activity',  component: NhcpocapiComponent },  // Activities
  { path: 'people',    component: NhcpocapiComponent },  // Contacts
  { path: 'detail/:imoNumber', component: VesselDetailComponent },
  { path: 'shipdetail/:imoNumber', component: FleetDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
