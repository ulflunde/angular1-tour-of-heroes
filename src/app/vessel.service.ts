/**
 * Created by E214595 on 27.02.2017.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Vessel } from './vessel';
//import { FLEET } from './mock-shiplist';


@Injectable()
export class VesselService {
  getShipsMock(): Promise<Vessel[]> {
    return Promise.resolve(FLEET);
  }

  getShipsMockSlowly(): Promise<Vessel[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getShips()), 1000);
    });
  }

  getHero(id: number): Promise<Vessel> {
    return this.getShips()
      .then(arrayelements => arrayelements.find(hero => hero.imoNumber === id));
  }

  getHeroByImoNumber(id: number): Promise<Vessel> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Vessel)
      .catch(this.handleError);
  }

  private heroesUrl = 'api/fleetSimulation';  // URL to web api

  constructor(private http: Http) { }

  getShips(): Promise<Vessel[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Vessel[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
