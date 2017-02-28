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
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var fleet_component_1 = require('./fleet.component');
var vessel_detail_component_1 = require('./vessel-detail.component');
var nhcpocapi_component_1 = require('./nhcpocapi.component');
var fleet_detail_component_1 = require('./fleet-detail.component');
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'detail/:imoNumber', component: vessel_detail_component_1.VesselDetailComponent },
    { path: 'shipdetail/:imoNumber', component: fleet_detail_component_1.FleetDetailComponent },
    { path: 'fleet', component: fleet_component_1.FleetComponent },
    { path: 'api', component: nhcpocapi_component_1.NhcpocapiComponent },
    { path: 'documents', component: nhcpocapi_component_1.NhcpocapiComponent },
    { path: 'map', component: nhcpocapi_component_1.NhcpocapiComponent },
    { path: 'pic', component: nhcpocapi_component_1.NhcpocapiComponent },
    { path: 'log', component: nhcpocapi_component_1.NhcpocapiComponent },
    { path: 'activity', component: nhcpocapi_component_1.NhcpocapiComponent },
    { path: 'people', component: nhcpocapi_component_1.NhcpocapiComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map