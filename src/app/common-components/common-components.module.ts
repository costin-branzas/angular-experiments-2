import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';

import { BaseComponent } from './base-component.component'; 
import { SubComponent2 } from './sub-component2.component';


@NgModule({
    imports: [
        PortalModule
    ],
    exports: [],
    declarations: [
        BaseComponent,
        SubComponent2
    ],
    entryComponents: [
        BaseComponent,
        SubComponent2
    ]
})
export class CommonComponentsModule {
    constructor() {
        console.log("CommonModule constructor");
    }
}