// This is the root "component". A component is one of the basic building of Angular app.
// A component controls a portion of the screen (a view) via its associated template.  
// There is at least one root component in every Angular app.
// Conventional naming: AppComponent
// The component file hosts the client UX
// Best practice: to create component per purpose/functionality
// Here we are importing the Component decorator function.
import { Component } from '@angular/core';
import { Provider } from './provider';
import { ProviderDetailComponent } from './providerdetail.component';

// "Decorator" telling Angular what template to use and how to create the component.
// The @Component decorator function takes in a metadata object, that tells angular how to create
//  and use this component.
@Component({
    // This specifies a simple CSS selector for an HTML element to represent the component
    selector: 'my-app',
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
    `],
    directives: [ProviderDetailComponent]
})

// "Component class" controlling the appearance and behavior of view via its template. This is
//  where the application logic is written.
// This component is exported so that we can import it elsewhere in the application.
export class AppComponent {
    title = 'Provider Search';
    
    // We don't need to define the providers type, TS can infer it from the PROVIDERS aaray.
    providers = PROVIDERS;    
    selectedProvider: Provider;
    
    onSelect(provider: Provider) { 
        this.selectedProvider = provider; 
    }
 }

 var PROVIDERS: Provider[] = [
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


