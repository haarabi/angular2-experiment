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
// This is the root "component". A component is one of the basic building of Angular app.
// A component controls a portion of the screen (a view) via its associated template.  
// There is at least one root component in every Angular app.
// Conventional naming: AppComponent
// The component file hosts the client UX
// Best practice: to create component per purpose/functionality
// Here we are importing the Component decorator function.
var core_1 = require('@angular/core');
var providerdetail_component_1 = require('./providerdetail.component');
// "Decorator" telling Angular what template to use and how to create the component.
// The @Component decorator function takes in a metadata object, that tells angular how to create
//  and use this component.
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Provider Search';
        // We don't need to define the providers type, TS can infer it from the PROVIDERS aaray.
        this.providers = PROVIDERS;
    }
    AppComponent.prototype.onSelect = function (provider) {
        this.selectedProvider = provider;
    };
    AppComponent = __decorate([
        core_1.Component({
            // This specifies a simple CSS selector for an HTML element to represent the component
            selector: 'app',
            // This tells Angular how to render this component. 
            // double curly braces {{}} is called "interpolation" - this is one-way binding
            // ngModel is a build directive that allows two-way binding. It also propagates changes to
            //  every other binding of the provider.name.
            // The (*) prefix to ngFor indicates that the <li> element and its children constitute a master
            //  template
            // ngFor and ngIf are "structural directives" because they can change the structure of DOM.
            template: "\n        <h1>{{title}}</h1>\n        <h2>Provider List</h2>\n        <ul class=\"providers\">\n            <li *ngFor=\"let provider of providers\" \n                [class.selected]=\"provider === selectedProvider\"\n                (click)=\"onSelect(provider)\">\n                <span class=\"badge\">{{provider.id}}</span> {{provider.name}}\n            </li>\n        </ul>\n        <providerdetail [provider]=\"selectedProvider\"></providerdetail>\n    ",
            // the style applied in the decorator is only specific to this component. The outer HTML is not
            //  affected.
            styles: ["\n    .selected {\n        background-color: #CFD8DC !important;\n        color: white;\n    }\n    .providers {\n        margin: 0 0 2em 0;\n        list-style-type: none;\n        padding: 0;\n        width: 15em;\n    }\n    .providers li {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #EEE;\n        margin: .5em;\n        padding: .3em 0;\n        height: 1.6em;\n        border-radius: 4px;\n    }\n    .providers li.selected:hover {\n        background-color: #BBD8DC !important;\n        color: white;\n    }\n    .providers li:hover {\n        color: #607D8B;\n        background-color: #DDD;\n        left: .1em;\n    }\n    .providers .text {\n        position: relative;\n        top: -3px;\n    }\n    .providers .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0 0.7em;\n        background-color: #607D8B;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        margin-right: .8em;\n        border-radius: 4px 0 0 4px;\n    }\n    "],
            directives: [providerdetail_component_1.ProviderDetailComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var PROVIDERS = [
    { "id": 11, "name": "Dr. John" },
    { "id": 12, "name": "Dr. Smith" },
    { "id": 13, "name": "Dr. Dan" },
    { "id": 14, "name": "Dr. Robert" },
    { "id": 15, "name": "Dr. Jack" },
    { "id": 16, "name": "Dr. Alan" },
    { "id": 17, "name": "Dr. Mike" },
    { "id": 18, "name": "Dr. Joe" },
    { "id": 19, "name": "Dr. Philip" },
    { "id": 20, "name": "Dr. Sam" }
];
//# sourceMappingURL=app.component.js.map