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
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
// "Decorator" telling Angular what template to use and how to create the component.
// The @Component decorator function takes in a metadata object, that tells angular how to create
//  and use this component.
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Providers';
        this.hero = {
            id: 1,
            name: 'Dr. Frank'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            // This specifies a simple CSS selector for an HTML element to represent the component
            selector: 'my-app',
            // This tells Angular how to render this component. 
            // double curly braces {{}} is called "interpolation" - this is one-way binding
            // ngModel is a build directive that allows two-way binding. It also propagates changes to
            //  every other binding of the hero.name.
            template: "\n        <h1>{{title}}</h1>\n        <h2>{{hero.name}} details!</h2>\n        <div>\n            <label>id: </label>{{hero.id}}\n        </div>\n        <div>\n            <label>name: </label>\n            <input [(ngModel)]=\"hero.name\" placeholder=\"name\">\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map