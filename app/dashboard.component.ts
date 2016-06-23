import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Provider } from './provider';
import { ProviderService } from './provider.service';

@Component({
    selector: 'dashboard',
    templateUrl: `../../app/dashboard.component.html`,
    styleUrls: [`../../app/dashboard.component.css`]
})
export class DashboardComponent implements OnInit {
    providers: Provider[] = [];

    constructor(
        private router: Router,
        private providerService: ProviderService) {

    }

    ngOnInit() {
        this.providerService
            .getProviders()
            .then(providers => this.providers = providers.slice(1,5));

    }
    
    gotoDetail(provider: Provider) {
        let link = ['ProviderDetail', { id: provider.id }];
        this.router.navigate(link);
    }
}
