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
const core_1 = require('@angular/core');
const mockproviders_1 = require('./mockproviders');
// TS see the Injectable decorator and emits metadata about our service, metadata that Angular may
//  need to inject other dependencies into this service.
// While the ProviderService does not have any depencies, as a best practice always include the
//  decorator for consistency and future-proofing.
let ProviderService = class ProviderService {
    getProviders() {
        // Using promises so that we can ask for the data asynchronously.
        return Promise.resolve(mockproviders_1.PROVIDERS);
    }
    // Experimenting with getting data on a slow connection
    getProvidersSlowly() {
        return new Promise(resolve => setTimeout(() => resolve(mockproviders_1.PROVIDERS), 10000) // 2 seconds
         // 2 seconds
        );
    }
    getProvider(id) {
        return this.getProviders()
            .then(providers => providers.filter(provider => provider.id === id)[0]);
    }
};
ProviderService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], ProviderService);
exports.ProviderService = ProviderService;
//# sourceMappingURL=provider.service.js.map