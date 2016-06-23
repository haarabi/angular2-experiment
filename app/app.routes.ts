import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProviderDetailComponent } from './providerdetail.component';
import { ProviderComponent } from './provider.component';

// Route definitions
export const routes: 
    RouterConfig = [{ 
        path: 'dashboard',
        component: DashboardComponent
    },
    { 
        path: 'providerdetail/:id',
        component: ProviderDetailComponent
    },
    {
        path: 'providers', 
        component: ProviderComponent        
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];