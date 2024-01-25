import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentC } from './component-c/component-c.component';
import { ComponentD } from './component-d/component-d.component';

//import { ServicesModule } from '../services/services.module';


@NgModule({
    imports: [
        RouterModule.forChild([
            { 
                path: '',  
                children: [
                    { path: '', redirectTo: 'componentC', pathMatch: 'full' },
                    { path: 'componentC',  component: ComponentC },
                    { path: 'componentD',  component: ComponentD },
                ]
            }
        ]),
        //ServicesModule,
    ],
    exports: [RouterModule],
    declarations: [
        ComponentC,
        ComponentD,
    ],
}) 
export class ModuleB {
    constructor() {
        console.log("ModuleB constructor");
    }
}