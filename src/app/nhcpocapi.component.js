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
 * Created by E214595 on 28.02.2017.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var fleet_service_1 = require('./fleet.service');
var NhcpocapiComponent = (function () {
    function NhcpocapiComponent(router, fleetService) {
        this.router = router;
        this.fleetService = fleetService;
    }
    NhcpocapiComponent.prototype.ngOnInit = function () {
        this.getFleet();
    };
    NhcpocapiComponent.prototype.onSelect = function (hero) {
        this.selectedShip = hero;
    };
    NhcpocapiComponent.prototype.getFleet = function () {
        var _this = this;
        this.fleetService.getFleet().then(function (ships) { return _this.ships = ships; });
    };
    NhcpocapiComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/shipdetail', this.selectedShip.imoNumber]);
    };
    NhcpocapiComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-nhcpocapi',
            templateUrl: './nhcpocapi.component.html',
            styleUrls: ['./nhcpocapi.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, fleet_service_1.FleetService])
    ], NhcpocapiComponent);
    return NhcpocapiComponent;
}());
exports.NhcpocapiComponent = NhcpocapiComponent;
//# sourceMappingURL=nhcpocapi.component.js.map