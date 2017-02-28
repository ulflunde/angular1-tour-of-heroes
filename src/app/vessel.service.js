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
var mock_shiplist_1 = require('./mock-shiplist');
var VesselService = (function () {
    function VesselService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.heroesUrl = 'api/fleetSim'; // URL to web api
    }
    VesselService.prototype.getShipsMock = function () {
        return Promise.resolve(mock_shiplist_1.FLEET);
    };
    VesselService.prototype.getShipsMockSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 1 second delay
            setTimeout(function () { return resolve(_this.getShipsMock()); }, 1000);
        });
    };
    VesselService.prototype.getShipsSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getShips()); }, 1000);
        });
    };
    VesselService.prototype.getHero = function (id) {
        return this.getShips()
            .then(function (arrayelements) { return arrayelements.find(function (hero) { return hero.imoNumber === id; }); });
    };
    VesselService.prototype.getHeroByImoNumber = function (id) {
        var url = this.heroesUrl + "/" + id; // virker ikke
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
    VesselService.prototype.update = function (vessel) {
        var url = this.heroesUrl + "/" + vessel.id;
        return this.http
            .put(url, JSON.stringify(vessel), { headers: this.headers })
            .toPromise()
            .then(function () { return vessel; })
            .catch(this.handleError);
    };
    VesselService.prototype.create = function (name) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    VesselService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VesselService);
    return VesselService;
}());
exports.VesselService = VesselService;
//# sourceMappingURL=vessel.service.js.map