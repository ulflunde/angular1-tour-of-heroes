/**
 * Created by E214595 on 27.02.2017.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Vessel } from './vessel';
import { FLEET } from './mock-shiplist';


@Injectable()
export class VesselService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/fleetSim';  // URL to web api


  getShipsMock(): Promise<Vessel[]> {
    return Promise.resolve(FLEET);
  }

  getShipsMockSlowly(): Promise<Vessel[]> {
    return new Promise(resolve => {
      // Simulate server latency with 1 second delay
      setTimeout(() => resolve(this.getShipsMock()), 1000);
    });
  }

  getShipsSlowly(): Promise<Vessel[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getShips()), 1000);
    });
  }

  getHero(id: number): Promise<Vessel> {
    return this.getShips()
      .then(arrayelements => arrayelements.find(hero => hero.imoNumber === id));
  }

  getHeroByImoNumber(id: number): Promise<Vessel> {
    const url = `${this.heroesUrl}/${id}`;  // virker ikke
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Vessel)
      .catch(this.handleError);
  }

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


  update(vessel: Vessel): Promise<Vessel> {
    const url = `${this.heroesUrl}/${vessel.id}`;
    return this.http
      .put(url, JSON.stringify(vessel), {headers: this.headers})
      .toPromise()
      .then(() => vessel)
      .catch(this.handleError);
  }


  create(name: string): Promise<Vessel> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }


  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
