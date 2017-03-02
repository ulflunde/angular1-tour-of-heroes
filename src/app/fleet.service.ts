/**
 * Created by E214595 on 28.02.2017.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";
import 'rxjs/Rx';
import {FLEET_ENTRIES} from "./mock-fleet";
import {FleetEntry} from "./fleetEntry";
import {Observable} from "rxjs";

@Injectable()
export class FleetService {
  private fleetUrl = '/api';  /* configured in ../../proxy-config.json */
  private apiKey = '365289da-ff68-4d04-843b-0e0782e9be6d';

  constructor(private http :Http) {
  }

  /*
  getFleet(): Promise<FleetEntry[]> {
    return Promise.resolve(this.getFleetHttp());
  }*/

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private getFleetMock(): Promise<FleetEntry[]> {
    return Promise.resolve(FLEET_ENTRIES);
  }

  public getFleetHttp(): Promise<FleetEntry[]> {
    return this.http.get(this.fleetUrl + '/fleet?apikey=' + this.apiKey)
      .toPromise()
      .then(response => response.json().data as FleetEntry[])
      .catch(this.handleError);
  }

  public getFleet2(): Observable<any> {
    return this.http
      .get(this.fleetUrl + '/fleet?apikey=' + this.apiKey, [])
      .map((res: Response) => {
      // debugger;  // sjekk her hvis du ikke får ut data
        return res.json();
      });
  }

  public getHero(id: number): Promise<FleetEntry> {
    return this.getFleetMock()
      .then(arrayelements => arrayelements.find(hero => hero.imoNumber === id));
  }


  update(vessel: FleetEntry): Promise<FleetEntry> {
    // we can't update the data in INS2000
    return Promise.resolve(vessel);
  }


  create(name: string): Promise<FleetEntry> {
    // we can't add data to INS2000
    return Promise.resolve(null);
  }


  delete(id: number): Promise<void> {
    // we can't delete data from INS2000
    return;
  }
}
