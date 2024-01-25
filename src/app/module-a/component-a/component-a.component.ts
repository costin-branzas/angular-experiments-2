import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DomPortalHost } from '@angular/cdk/portal';

import { ServiceA } from '../../services/service-a.service';

import { SubComponent } from '../sub-component/sub-component.component';

@Component({
  selector: 'component-a',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p>{{title}}</p>
  <div #target></div>
  <button (click)='createDynamicBaseComponentUsingService()'>Create Dynamic Base Component Using Service</button>
  <button (click)='useService()'>Use Service</button>
  
  </div>`
})
export class ComponentA {
  title = "ComponentATitle";
  serviceA: ServiceA;
  componentFactoryResolver: ComponentFactoryResolver;
  @ViewChild('target', {read: ViewContainerRef }) targetViewContainerRef: any;
  
  constructor(serviceA: ServiceA, componentFactoryResolver: ComponentFactoryResolver) {
    this.serviceA = serviceA;
    this.componentFactoryResolver = componentFactoryResolver;
  }

  createDynamicBaseComponentUsingService() {
    this.serviceA.createBaseComponent(this.targetViewContainerRef, SubComponent);
  }

  useService() {
    this.serviceA.sayHello();
  }
}