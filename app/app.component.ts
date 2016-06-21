import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProviderService } from './provider.service';
//import { ProviderComponent } from './provider.component';
//import { DashboardComponent } from './dashboard.component';

@Component({
    selector: 'app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['/dashboard']">Dashboard</a>
            <a [routerLink]="['/providers']">Providers</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        ProviderService
    ]
})

export class AppComponent {
    title = 'Provider Search';
}