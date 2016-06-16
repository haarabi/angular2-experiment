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
// The provider property is an input, the ProviderDetailComponent must be told from the parent
//  component (AppComponent) which Provider to display 
var core_1 = require('@angular/core');
var provider_1 = require('./provider');
var ProviderDetailComponent = (function () {
    function ProviderDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', provider_1.Provider)
    ], ProviderDetailComponent.prototype, "provider", void 0);
    ProviderDetailComponent = __decorate([
        core_1.Component({
            selector: 'providerdetail',
            template: "\n        <div *ngIf=\"provider\">\n            <h2>{{provider.name}} details!</h2>\n            <div><label>id: </label>{{provider.id}}</div>\n            <div>\n                <label>name: </label>\n                <input [(ngModel)]=\"provider.name\" placeholder=\"name\"/>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ProviderDetailComponent);
    return ProviderDetailComponent;
}());
exports.ProviderDetailComponent = ProviderDetailComponent;
//# sourceMappingURL=providerdetail.component.js.map