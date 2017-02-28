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
var router_1 = require('@angular/router');
var FleetComponent = (function () {
    function FleetComponent(router, VesselService) {
        this.router = router;
        this.VesselService = VesselService;
    }
    FleetComponent.prototype.ngOnInit = function () {
        this.getFleet();
    };
    FleetComponent.prototype.onSelect = function (hero) {
        this.selectedShip = hero;
    };
    FleetComponent.prototype.getHeroes = function () {
        var _this = this;
        this.VesselService.getShipsMockSlowly().then(function (ships) { return _this.ships = ships; });
    };
    FleetComponent.prototype.getMockFleet = function () {
        var _this = this;
        this.VesselService.getShipsMockSlowly().then(function (ships) { return _this.ships = ships; });
    };
    FleetComponent.prototype.getFleetSlowly = function () {
        var _this = this;
        this.VesselService.getShipsSlowly().then(function (ships) { return _this.ships = ships; });
    };
    FleetComponent.prototype.getFleet = function () {
        var _this = this;
        this.VesselService.getShips().then(function (ships) { return _this.ships = ships; });
    };
    FleetComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedShip.imoNumber]);
    };
    FleetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-vessels',
            templateUrl: './fleet.component.html',
            styleUrls: ['./fleet.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, vessel_service_1.VesselService])
    ], FleetComponent);
    return FleetComponent;
}());
exports.FleetComponent = FleetComponent;
//# sourceMappingURL=fleet.component.js.map