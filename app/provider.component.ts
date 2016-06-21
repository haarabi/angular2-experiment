// This is the root "component". A component is one of the basic building of Angular app.
// A component controls a portion of the screen (a view) via its associated template.  
// There is at least one root component in every Angular app.
// Conventional naming: AppComponent
// The component file hosts the client UX
// Best practice: to create component per purpose/functionality
// Here we are importing the Component decorator function.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from './provider';
import { ProviderService } from './provider.service';

// "Decorator" telling Angular what template to use and how to create the component.
// The @Component decorator function takes in a metadata object, that tells angular how to create
//  and use this component.
@Component({
    // This specifies a simple CSS selector for an HTML element to represent the component
    selector: 'provider',
    // This tells Angular how to render this component. 
    // double curly braces {{}} is called "interpolation" - this is one-way binding
    // ngModel is a build directive that allows two-way binding. It also propagates changes to
    //  every other binding of the provider.name.
    // The (*) prefix to ngFor indicates that the <li> element and its children constitute a master
    //  template
    // ngFor and ngIf are "structural directives" because they can change the structure of DOM.
    template: `app/provider.component.html`,
    // the style applied in the decorator is only specific to this component. The outer HTML is not
    //  affected.
    styles:[`app/provider.component.css`]
})

// "Component class" controlling the appearance and behavior of view via its template. This is
//  where the application logic is written.
// This component is exported so that we can import it elsewhere in the application.
export class ProviderComponent implements OnInit {
    providers: Provider[];
    selectedProvider: Provider;
    
    // keep complex logic out of the constructor. Use cstr for simple initializations.
    constructor(
        private router: Router,
        private providerService: ProviderService) {

    }

    // The arrow function (=>) is new in ES2015 used in callbacks.
    // The callback below sets the component's providers property to the array of providers
    //  returned by the service.
    getProviders() {
        this.providerService
                .getProviders()
                .then(providers => this.providers = providers);
    }

    // Angular Lifecycle Hooks used to get providers
    ngOnInit(){
        this.getProviders();
    }

    onSelect(provider: Provider) { 
        this.selectedProvider = provider; 
    }

    gotoDetail() {
        this.router.navigate(['ProviderDetail', { id: this.selectedProvider.id }]);
    }
 }

/*
Note:
* Reasons why we should not use the new ProviderSerivce() or force the code to use the service
   inteface (therefore we use service injection):
1. Our component has to know how to create a ProviderService. If we ever change the ProviderService
constructor, we'll have to find every place we create the service and fix it. Running around
patching code is error prone and adds to the test burden.

2. We create a new service each time we use new. What if the service should cache providers and share
that cache with others? We couldn't do that.

3. We're locking the AppComponent into a specific implementation of the ProviderService. It will be
hard to switch implementations for different scenarios. Can we operate offline? Will we need
different mocked versions under test? Not easy. 
*/
 