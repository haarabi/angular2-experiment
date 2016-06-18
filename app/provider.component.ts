// This is the root "component". A component is one of the basic building of Angular app.
// A component controls a portion of the screen (a view) via its associated template.  
// There is at least one root component in every Angular app.
// Conventional naming: AppComponent
// The component file hosts the client UX
// Best practice: to create component per purpose/functionality
// Here we are importing the Component decorator function.
import { Component, OnInit } from '@angular/core';
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
    template: `
        <h1>{{title}}</h1>
        <h2>Provider List</h2>
        <ul class="providers">
            <li *ngFor="let provider of providers" 
                [class.selected]="provider === selectedProvider"
                (click)="onSelect(provider)">
                <span class="badge">{{provider.id}}</span> {{provider.name}}
            </li>
        </ul>
        <providerdetail [provider]="selectedProvider"></providerdetail>
    `,
    // the style applied in the decorator is only specific to this component. The outer HTML is not
    //  affected.
    styles:[`
    .selected {
        background-color: #CFD8DC !important;
        color: white;
    }
    .providers {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
    }
    .providers li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
    }
    .providers li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
    }
    .providers li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
    }
    .providers .text {
        position: relative;
        top: -3px;
    }
    .providers .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
    }
    `]
})

// "Component class" controlling the appearance and behavior of view via its template. This is
//  where the application logic is written.
// This component is exported so that we can import it elsewhere in the application.
export class ProviderComponent implements OnInit {
    providers: Provider[];
    selectedProvider: Provider;
    
    // keep complex logic out of the constructor. Use cstr for simple initializations.
    constructor(private providerService: ProviderService) {

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
 