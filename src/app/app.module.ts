import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }  from 'angular-in-memory-web-api';
import { InMemoryDataService }   from './in-memory-data.service';
import { AppRoutingModule }      from './app-routing.module';
import { AppComponent }          from './app.component';
import { VesselDetailComponent } from './vessel-detail.component';
import { FleetComponent }        from './fleet.component';
import { DashboardComponent }    from './dashboard.component';
import { NhcpocapiComponent }    from './nhcpocapi.component';
import { FleetDetailComponent }  from './fleet-detail.component';
import { VesselService }         from './vessel.service';
import { FleetService }          from "./fleet.service";
import { DocumentsComponent }    from './documents.component';
import { PhotosComponent }       from './photos.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    VesselDetailComponent,
    FleetComponent,
    FleetDetailComponent,
    NhcpocapiComponent,
    DocumentsComponent,
    PhotosComponent
  ],
  providers: [ VesselService, FleetService ],
  bootstrap: [ AppComponent ]
})


export class AppModule { }
