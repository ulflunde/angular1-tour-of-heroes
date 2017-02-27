/**
 * Created by E214595 on 27.02.2017.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let fleet = [
      { imoNumber: 9155303, name: 'Merlin Arrow' },
      { imoNumber: 9182485, name: 'Stove Campbell' },
      { imoNumber: 9164184, name: 'Bergen Atlantic' },
      { imoNumber: 9214147, name: 'Barcarena' },
      { imoNumber: 9228057, name: 'Bangor' },
      { imoNumber: 9223980, name: 'Tamarita' },
      { imoNumber: 9223992, name: 'Fermita' },
      { imoNumber: 9335020, name: 'Serpentine' },
      { imoNumber: 9734991, name: 'Spar Indus' },
      { imoNumber: 9585285, name: 'MSC Divina' }
    ];
    return {fleet};
  }
}
