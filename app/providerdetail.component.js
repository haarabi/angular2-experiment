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
const core_1 = require('@angular/core');
const provider_1 = require('./provider');
let ProviderDetailComponent = class ProviderDetailComponent {
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', provider_1.Provider)
], ProviderDetailComponent.prototype, "provider", void 0);
ProviderDetailComponent = __decorate([
    core_1.Component({
        selector: 'providerdetail',
        template: `
        <div *ngIf="provider">
            <h2>{{provider.name}} details!</h2>
            <div><label>id: </label>{{provider.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="provider.name" placeholder="name"/>
            </div>
        </div>
    `
    }), 
    __metadata('design:paramtypes', [])
], ProviderDetailComponent);
exports.ProviderDetailComponent = ProviderDetailComponent;
//# sourceMappingURL=providerdetail.component.js.map