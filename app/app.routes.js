"use strict";
const router_1 = require('@angular/router');
const dashboard_component_1 = require('./dashboard.component');
const providerdetail_component_1 = require('./providerdetail.component');
const provider_component_1 = require('./provider.component');
// Route definitions
exports.routes = [{
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'providerdetail/:id',
        component: providerdetail_component_1.ProviderDetailComponent
    },
    {
        path: 'providers',
        component: provider_component_1.ProviderComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map