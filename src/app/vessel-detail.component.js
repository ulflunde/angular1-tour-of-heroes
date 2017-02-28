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
 * Created by E214595 on 24.02.2017.
 */
var core_1 = require('@angular/core');
var vessel_1 = require('./vessel');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var vessel_service_1 = require('./vessel.service');
require('rxjs/add/operator/switchMap');
var VesselDetailComponent = (function () {
    function VesselDetailComponent(VesselService, route, location) {
        this.VesselService = VesselService;
        this.route = route;
        this.location = location;
    }
    VesselDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.VesselService.getHero(+params['imoNumber']); })
            .subscribe(function (vessel) { return _this.vessel = vessel; });
    };
    VesselDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    VesselDetailComponent.prototype.save = function () {
        var _this = this;
        this.VesselService.update(this.vessel)
            .then(function () { return _this.goBack(); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vessel_1.Vessel)
    ], VesselDetailComponent.prototype, "vessel", void 0);
    VesselDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-vessel-detail',
            templateUrl: './vessel-detail.component.html',
            styleUrls: ['./vessel-detail.component.css']
        }), 
        __metadata('design:paramtypes', [vessel_service_1.VesselService, router_1.ActivatedRoute, common_1.Location])
    ], VesselDetailComponent);
    return VesselDetailComponent;
}());
exports.VesselDetailComponent = VesselDetailComponent;
//# sourceMappingURL=vessel-detail.component.js.map