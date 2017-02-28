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
var core_1 = require('@angular/core');
var fleetEntry_1 = require("./fleetEntry");
var FleetDetailComponent = (function () {
    function FleetDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', fleetEntry_1.FleetEntry)
    ], FleetDetailComponent.prototype, "fleetEntry", void 0);
    FleetDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-fleet-detail',
            template: "\n\n    <div *ngIf=\"fleetEntry\">\n      <h2>{{fleetEntry.objectName}}</h2>\n      <div><label>insuranceYear: </label>{{fleetEntry.insuranceYear}}</div>\n      <div><label>coverNote: </label>{{fleetEntry.coverNote}}</div>\n      <div><label>interest: </label>{{fleetEntry.interest}}</div>\n      <div><label>clientNumber: </label>{{fleetEntry.clientNumber}}</div>\n      <div><label>clientName: </label>{{fleetEntry.clientName}}</div>\n      <div><label>peti: </label>{{fleetEntry.peti}}</div>\n      <div><label>petiName: </label>{{fleetEntry.petiName}}</div>\n      <div><label>fleetName: </label>{{fleetEntry.fleetName}}</div>\n      <div><label>imoNumber: </label>{{fleetEntry.imoNumber}}</div>\n      <div><label>objectName: </label>{{fleetEntry.objectName}}</div>\n      <div><label>ccyCode: </label>{{fleetEntry.ccyCode}}</div>\n      <div><label>insuranceValue: </label>{{fleetEntry.insuranceValue}}</div>\n      <div><label>mainDeductible: </label>{{fleetEntry.mainDeductible}}</div>\n      <div><label>netPremium: </label>{{fleetEntry.netPremium}}</div>\n      <div><label>lohDailyAmount: </label>{{fleetEntry.lohDailyAmount}}</div>\n      <div><label>lohDays: </label>{{fleetEntry.lohDays}}</div>\n      <div><label>lohBasis: </label>{{fleetEntry.lohBasis}}</div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FleetDetailComponent);
    return FleetDetailComponent;
}());
exports.FleetDetailComponent = FleetDetailComponent;
//# sourceMappingURL=fleet-detail.component.js.map