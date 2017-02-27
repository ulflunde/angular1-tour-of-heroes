"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by E214595 on 27.02.2017.
 */
var core_1 = require('@angular/core');
var vessel_service_1 = require('./vessel.service');
var FleetComponent = (function () {
    function FleetComponent(VesselService) {
        this.VesselService = VesselService;
    }
    FleetComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    FleetComponent.prototype.onSelect = function (hero) {
        this.selectedShip = hero;
    };
    FleetComponent.prototype.getHeroes = function () {
        var _this = this;
        this.VesselService.getShips().then(function (ships) { return _this.ships = ships; });
        //this.VesselService.getShipsSlowly().then(ships => this.ships = ships);
    };
    FleetComponent = __decorate([
        core_1.Component({
            selector: 'my-vessels',
            template: "\n<h2>My Vessels</h2>\n<ul class=\"heroes\">\n<li *ngFor=\"let vessel of ships\" [class.selected]=\"vessel === selectedShip\" (click)=\"onSelect(vessel)\">\n    <span class=\"badge\">{{vessel.imoNumber}}</span> {{vessel.name}}\n</li>\n</ul>\n<my-vessel-detail [vessel]=\"selectedShip\"></my-vessel-detail>\n  ",
            styles: ["\n  .selected {\n    background-color: #CFFFDC !important;\n    color: black;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #8fbf9c !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
        }), 
        __metadata('design:paramtypes', [vessel_service_1.VesselService])
    ], FleetComponent);
    return FleetComponent;
}());
exports.FleetComponent = FleetComponent;
//# sourceMappingURL=fleet.component.js.map