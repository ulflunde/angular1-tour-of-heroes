import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }          from './app.component';
import { VesselDetailComponent } from './vessel-detail.component';
import { FleetComponent }        from './fleet.component';
import { DashboardComponent }    from './dashboard.component';
import { VesselService }         from './vessel.service';

import { RouterModule }   from '@angular/router';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'fleet',
        component: FleetComponent
      },
      {
        path: 'detail/:imoNumber',
        component: VesselDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    VesselDetailComponent,
    FleetComponent
  ],
  providers: [ VesselService ],
  bootstrap: [ AppComponent ]
})


export class AppModule { }
