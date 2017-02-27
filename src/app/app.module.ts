import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }          from './app.component';
import { VesselDetailComponent } from './vessel-detail.component';
import { FleetComponent }        from './fleet.component';
import { DashboardComponent }    from './dashboard.component';
import { VesselService }         from './vessel.service';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
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
