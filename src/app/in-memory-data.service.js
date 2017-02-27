"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var fleet = [
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
        return { fleet: fleet };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map