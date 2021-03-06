/**
 * Created by E214595 on 27.02.2017.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';  // must remove this to run on live data, because it intercepts all http calls
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let fleetSim = [
      { id: 9155303, imoNumber: 9155303, name: 'Merlin Arrow' },
      { id: 9182485, imoNumber: 9182485, name: 'Stove Campbell' },
      { id: 9164184, imoNumber: 9164184, name: 'Bergen Atlantic' },
      { id: 9214147, imoNumber: 9214147, name: 'Barcarena' },
      { id: 9228057, imoNumber: 9228057, name: 'Bangor' },
      { id: 9223980, imoNumber: 9223980, name: 'Tamarita' },
      { id: 9223992, imoNumber: 9223992, name: 'Fermita' },
      { id: 9335020, imoNumber: 9335020, name: 'Serpentine' },
      { id: 9734991, imoNumber: 9734991, name: 'Spar Indus' },
      { id: 9585285, imoNumber: 9585285, name: 'MSC Divina' }
    ];
    return {fleetSim};
  }
}
