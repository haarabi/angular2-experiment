"use strict";
// This is the Angular's browser bootstrap function.
// This is platform-specific. We might load it on a mobile device with Apache Cordova or 
//  NativeScript. We might wish to render the first page of our application on the server to  
//  improve launch performance or facilitate SEO. These targets require a different kind of 
//  bootstrap function that we'd import from a different library.
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// Importing XHRBackend for loading & configuring the in-memory api
const http_1 = require('@angular/http');
const angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
const in_memory_data_service_1 = require('./in-memory-data.service');
// This is our application root component.
const app_component_1 = require('./app.component');
const app_routes_1 = require('./app.routes');
// This tells Angular to load the root component.
// Generally, Angular recommends registering application-wide services in the root AppComponent
//  providers. This is an exception.
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    {
        provide: http_1.XHRBackend,
        useClass: angular2_in_memory_web_api_1.InMemoryBackendService
    },
    {
        provide: angular2_in_memory_web_api_1.SEED_DATA,
        useClass: in_memory_data_service_1.InMemoryDataService
    } // in-mem server data
])
    .catch(err => console.error(err));
//# sourceMappingURL=main.js.map