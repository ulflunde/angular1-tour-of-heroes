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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
//import { FLEET } from './mock-shiplist';
var VesselService = (function () {
    function VesselService(http) {
        this.http = http;
        this.heroesUrl = 'api/fleetSimulation'; // URL to web api
    }
    VesselService.prototype.getShipsMock = function () {
        return Promise.resolve(FLEET);
    };
    VesselService.prototype.getShipsMockSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getShips()); }, 1000);
        });
    };
    VesselService.prototype.getHero = function (id) {
        return this.getShips()
            .then(function (arrayelements) { return arrayelements.find(function (hero) { return hero.imoNumber === id; }); });
    };
    VesselService.prototype.getHeroByImoNumber = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    VesselService.prototype.getShips = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    VesselService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    VesselService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VesselService);
    return VesselService;
}());
exports.VesselService = VesselService;
//# sourceMappingURL=vessel.service.js.map