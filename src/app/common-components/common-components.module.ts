import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';

import { BaseComponent } from './base-component.component';


@NgModule({
    imports: [
        PortalModule
    ],
    exports: [],
    declarations: [
        BaseComponent,
    ],
    entryComponents: [
        BaseComponent,
    ]
})
export class CommonComponentsModule {
    constructor() {
        console.log("CommonModule constructor");
    }
}