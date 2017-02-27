import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }          from './app.component';
import { VesselDetailComponent } from './vessel-detail.component';
import { FleetComponent }        from './fleet.component';
import { VesselService }         from './vessel.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    VesselDetailComponent,
    FleetComponent
  ],
  providers: [ VesselService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
