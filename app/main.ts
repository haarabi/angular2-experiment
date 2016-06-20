// This is the Angular's browser bootstrap function.
// This is platform-specific. We might load it on a mobile device with Apache Cordova or 
//  NativeScript. We might wish to render the first page of our application on the server to  
//  improve launch performance or facilitate SEO. These targets require a different kind of 
//  bootstrap function that we'd import from a different library.
import { bootstrap } from '@angular/platform-browser-dynamic';
// This is our application root component.
import { AppComponent} from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

// This tells Angular to load the root component.
bootstrap(
    AppComponent,
    [APP_ROUTER_PROVIDERS]
)
.catch(err => console.error(err));