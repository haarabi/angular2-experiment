import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { ProviderService } from './provider.service';
import { ProviderComponent } from './provider.component';

@Component({
    selector: 'app',
    template: `
        <h1>{{title}}</h1>
        <a [routerLink]="['Providers']">Providers</a>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        ProviderService
    ]
})
@RouteConfig([
    {
        // the router matches this route's path to the URL in the browser address bar
        path: '/providers',
        // the official name of the route; it must begin with a capital letter to avoid confusion
        //  with the path
        name: 'Providers',
        // the component the router should create when navigating to this route
        component: ProviderService
    }
])
export class AppComponent {
    title = 'Provider Search';
}