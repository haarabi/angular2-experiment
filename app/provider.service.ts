import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Provider } from './provider';
//import { PROVIDERS } from './mockproviders';


// TS see the Injectable decorator and emits metadata about our service, metadata that Angular may
//  need to inject other dependencies into this service.
// While the ProviderService does not have any depencies, as a best practice always include the
//  decorator for consistency and future-proofing.
@Injectable()
export class ProviderService {
    private providersUrl = 'app/providers';  // URL to web api
    constructor(private http: Http) { }

    getProviders(): Promise<Provider[]> {
        // Using promises so that we can ask for the data asynchronously.
        // We are now using RxJS observable. Which allows managing asynchronous data flows.
        return this.http.get(this.providersUrl)
                   .toPromise()
                   .then(response => response.json().data)
                   .catch(this.handleError);                
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


    // // Experimenting with getting data on a slow connection
    // getProvidersSlowly() {
    //     return new Promise<Provider[]>(resolve =>
    //     setTimeout(() => resolve(PROVIDERS), 10000) // 2 seconds
    //     );
    // }

    getProvider(id: number) {
        return this.getProviders()
            .then(providers => providers.filter(provider => provider.id === id)[0]);
    }
}