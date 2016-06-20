import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Dashboard2Component } from './dashboard2.component';
import { ProviderComponent } from './provider.component';

// Route definitions
export const routes: 
    RouterConfig = [{ 
        path: 'dashboard',
        component: DashboardComponent
    },
    { 
        path: 'dashboard2',
        component: Dashboard2Component
    },
    {
        path: 'providers', 
        component: ProviderComponent        
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];