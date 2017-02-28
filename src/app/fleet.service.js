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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var FleetService = (function () {
    function FleetService(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
        this.fleetUrl = 'http://nhcpocapi.azurewebsites.net/api/fleet';
        this.apiKey = '365289da-ff68-4d04-843b-0e0782e9be6d';
    }
    FleetService.prototype.getFleet = function () {
        return Promise.resolve(this.getFleetHttp());
    };
    FleetService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /*
    private getFleetMock(): Promise<FleetEntry[]> {
      return Promise.resolve(FLEET_ENTRIES);
    }
    */
    FleetService.prototype.getFleetHttp = function () {
        return this.http
            .get(this.fleetUrl + '?apikey=' + this.apiKey)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    FleetService.prototype.getFleetJsonp = function () {
        var params = new http_1.URLSearchParams();
        params.set('apikey', this.apiKey);
        //params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(this.fleetUrl, { search: params })
            .toPromise()
            .then(function (response) { return response.json()[1]; })
            .catch(this.handleError);
    };
    FleetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp, http_1.Http])
    ], FleetService);
    return FleetService;
}());
exports.FleetService = FleetService;
//# sourceMappingURL=fleet.service.js.map