"use strict";
// This is the Angular's browser bootstrap function.
// This is platform-specific. We might load it on a mobile device with Apache Cordova or 
//  NativeScript. We might wish to render the first page of our application on the server to  
//  improve launch performance or facilitate SEO. These targets require a different kind of 
//  bootstrap function that we'd import from a different library.
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// This is our application root component.
var app_component_1 = require('./app.component');
// This tells Angular to load the root component.
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent);
//# sourceMappingURL=main.js.map