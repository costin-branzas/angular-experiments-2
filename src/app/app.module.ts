import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { PortalModule } from '@angular/cdk/portal';

import { CommonComponentsModule } from './common-components/common-components.module';

import { AppComponent } from './app.component';

import { ServicesModule } from './services/services.module';


@NgModule({
  imports: [
    BrowserModule,
    //PortalModule,
    
    RouterModule.forRoot([
      { path: '', redirectTo: 'moduleA', pathMatch: 'full' },
      { path: 'moduleA',  loadChildren: 'app/module-a/module-a.module#ModuleA' },
      { path: 'moduleB',  loadChildren: 'app/module-b/module-b.module#ModuleB' },
    ]),

    //ServicesModule.forRoot(),
    ServicesModule,
    
    CommonComponentsModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("AppModule constructor");
  }
}
