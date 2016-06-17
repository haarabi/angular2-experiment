import { Injectable } from '@angular/core';
import { PROVIDERS } from './mockproviders';

// TS see the Injectable decorator and emits metadata about our service, metadata that Angular may
//  need to inject other dependencies into this service.
// While the ProviderService does not have any depencies, as a best practice always include the
//  decorator for consistency and future-proofing.
@Injectable()
export class ProviderService {
    getProviders(){
        // Using promises so that we can ask for the data asynchronously.
        return Promise.resolve(PROVIDERS);
    }
}