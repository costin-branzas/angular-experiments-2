import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentA } from './component-a/component-a.component';
import { ComponentB } from './component-b/component-b.component';

//import { ServicesModule } from '../services/services.module';
import { SubComponent } from './sub-component/sub-component.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { 
                path: '',
                children: [
                    { path: '', redirectTo: 'componentA', pathMatch: 'full' },
                    { path: 'componentA',  component: ComponentA },
                    { path: 'componentB',  component: ComponentB },
                ]
            }
        ]),
        //ServicesModule,
    ],
    exports: [RouterModule],
    declarations: [
        ComponentA,
        ComponentB,
        SubComponent,
    ],
    entryComponents: [SubComponent],
})
export class ModuleA {
    constructor() {
        console.log("ModuleA constructor");
    }
}