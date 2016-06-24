// This is the Angular's browser bootstrap function.
// This is platform-specific. We might load it on a mobile device with Apache Cordova or 
//  NativeScript. We might wish to render the first page of our application on the server to  
//  improve launch performance or facilitate SEO. These targets require a different kind of 
//  bootstrap function that we'd import from a different library.
import { bootstrap } from '@angular/platform-browser-dynamic';
// Importing XHRBackend for loading & configuring the in-memory api
import { HTTP_PROVIDERS, XHRBackend  } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';
// This is our application root component.
import { AppComponent} from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

// This tells Angular to load the root component.
// Generally, Angular recommends registering application-wide services in the root AppComponent
//  providers. This is an exception.
bootstrap(
    AppComponent,
    [
        APP_ROUTER_PROVIDERS, 
        HTTP_PROVIDERS,
        { 
            provide: XHRBackend, 
            useClass: InMemoryBackendService 
        }, // in-mem server
        { 
            provide: SEED_DATA, 
            useClass: InMemoryDataService 
        } // in-mem server data
    ]
)
.catch(err => console.error(err));