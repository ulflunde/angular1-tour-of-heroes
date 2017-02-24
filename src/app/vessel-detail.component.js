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
var VesselDetailComponent = (function () {
    function VesselDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', vessel_1.Vessel)
    ], VesselDetailComponent.prototype, "vessel", void 0);
    VesselDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-vessel-detail',
            template: "\n<div *ngIf=\"vessel\">\n  <h2>{{vessel.name}} details</h2>\n<div><label>id: </label>{{vessel.id}}</div>\n<div>\n  <label>name: </label>\n<input [(ngModel)]=\"vessel.name\" placeholder=\"name\"/>\n  </div>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], VesselDetailComponent);
    return VesselDetailComponent;
}());
exports.VesselDetailComponent = VesselDetailComponent;
//# sourceMappingURL=vessel-detail.component.js.map