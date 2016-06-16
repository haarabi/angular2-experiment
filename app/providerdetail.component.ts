// The provider property is an input, the ProviderDetailComponent must be told from the parent
//  component (AppComponent) which Provider to display 
import { Component, Input } from '@angular/core';
import { Provider } from './provider';

@Component({
    selector: 'providerdetail',
    template: `
        <div *ngIf="provider">
            <h2>{{provider.name}} details!</h2>
            <div><label>id: </label>{{provider.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="provider.name" placeholder="name"/>
            </div>
        </div>
    `
})

export class ProviderDetailComponent {
    @Input()
    provider: Provider;
}