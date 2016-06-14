// This is the root "component". A component is one of the basic building of Angular app.
// A component controls a portion of the screen (a view) via its associated template.  
// There is at least one root component in every Angular app.
// Conventional naming: AppComponent
// The component file hosts the client UX
// Best practice: to create component per purpose/functionality
// Here we are importing the Component decorator function.
import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

// "Decorator" telling Angular what template to use and how to create the component.
// The @Component decorator function takes in a metadata object, that tells angular how to create
//  and use this component.
@Component({
    // This specifies a simple CSS selector for an HTML element to represent the component
    selector: 'my-app',
    // This tells Angular how to render this component. 
    // double curly braces {{}} is called "interpolation" - this is one-way binding
    // ngModel is a build directive that allows two-way binding. It also propagates changes to
    //  every other binding of the hero.name.
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div>
            <label>id: </label>{{hero.id}}
        </div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
    `
})

// "Component class" controlling the appearance and behavior of view via its template. This is
//  where the application logic is written.
// This component is exported so that we can import it elsewhere in the application.
export class AppComponent {
    title = 'Providers';
    hero: Hero = {
        id: 1,
        name: 'Dr. Frank'
    };
 }
