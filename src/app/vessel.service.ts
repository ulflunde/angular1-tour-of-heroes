/**
 * Created by E214595 on 27.02.2017.
 */
import { Injectable } from '@angular/core';
import { Vessel } from './vessel';
import { FLEET } from './mock-shiplist';


@Injectable()
export class VesselService {
  getShips(): Vessel[] {
    return FLEET;
  }
}
