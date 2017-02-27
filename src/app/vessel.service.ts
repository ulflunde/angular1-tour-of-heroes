/**
 * Created by E214595 on 27.02.2017.
 */
import { Injectable } from '@angular/core';
import { Vessel } from './vessel';
import { FLEET } from './mock-shiplist';


@Injectable()
export class VesselService {
  getShips(): Promise<Vessel[]> {
    return Promise.resolve(FLEET);
  }

  getShipsSlowly(): Promise<Vessel[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getShips()), 5000);
    });
  }

  getHero(id: number): Promise<Vessel> {
    return this.getShips()
      .then(arrayelements => arrayelements.find(hero => hero.imoNumber === id));
  }

}
