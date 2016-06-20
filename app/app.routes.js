"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var dashboard2_component_1 = require('./dashboard2.component');
var provider_component_1 = require('./provider.component');
// Route definitions
exports.routes = [{
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'dashboard2',
        component: dashboard2_component_1.Dashboard2Component
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