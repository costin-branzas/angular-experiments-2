import { ModuleWithProviders, NgModule } from '@angular/core';

import { ServiceA } from './service-a.service';


// @NgModule({
//     //providers: [ServiceA],
// }) 
// export class ServicesModule {
//     constructor() {
//         console.log("ServicesModule constructor");
//     }   

//     static forRoot(): ModuleWithProviders {
//         return {
//             ngModule: ServicesModule,
//             providers: [ServiceA]
//         };
//     }
// }

@NgModule({
    providers: [ServiceA],
}) 
export class ServicesModule {
    constructor() {}
}

