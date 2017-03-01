/**
 * Created by E214595 on 28.02.2017.
 */
import {Injectable} from "@angular/core";
/*
import {URLSearchParams, Jsonp, Http} from "@angular/http";
*/
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {FLEET_ENTRIES} from "./mock-fleet";
import {FleetEntry} from "./fleetEntry";

@Injectable()
export class FleetService {
  private fleetUrl = '/api';
  private apiKey = '365289da-ff68-4d04-843b-0e0782e9be6d';
/*
  constructor(private jsonp: Jsonp, private http :Http) {
  }
*/
  constructor(private http :Http) {
  }

  getFleet(): Promise<FleetEntry[]> {
    return Promise.resolve(this.getFleetHttp());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private getFleetMock(): Promise<FleetEntry[]> {
    return Promise.resolve(FLEET_ENTRIES);
  }

  private getFleetHttp(): Promise<FleetEntry[]> {
    return this.http
      .get(this.fleetUrl + '?apikey=' + this.apiKey)
      .toPromise()
      .then(response => response.json().data as FleetEntry[])
      .catch(this.handleError);
  }

  /*
  private getFleetJsonp(): Promise<FleetEntry[]> {
    let params = new URLSearchParams();

    params.set('apikey', this.apiKey);
    //params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get(this.fleetUrl, {search: params})
      .toPromise()
      .then(response => <FleetEntry[]> response.json()[1])
      .catch(this.handleError);
  }
  */
}
