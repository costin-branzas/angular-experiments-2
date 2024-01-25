import { Portal, ComponentPortal, DomPortalHost } from '@angular/cdk/portal';
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { SubComponent2 } from './sub-component2.component';

@Component({
  selector: 'base-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p>{{title}}</p>
  <div #target></div>
  <ng-template [cdkPortalHost]="selectedPortal"></ng-template>
  <button (click)='createDynamicSubComponent()'>Create Dynamic Sub Component</button>
  <button (click)='createDynamicSubComponentWithPortal()'>Create Dynamic Sub Component With Portal</button>

  </div>`
})
export class BaseComponent {
  title = "BaseComponentTitle";

  public subComponentType: any;
  
  public componentFactoryResolver: ComponentFactoryResolver;
  
  private selectedPortal: Portal<any> = null;

  @ViewChild('target', {read: ViewContainerRef }) targetViewContainerRef: any;

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    this.componentFactoryResolver = componentFactoryResolver;
  }

  createDynamicSubComponent() {
    let subComponentFactory = this.componentFactoryResolver.resolveComponentFactory(this.subComponentType);
    this.targetViewContainerRef.createComponent(subComponentFactory);
  }

  createDynamicSubComponentWithPortal() {
    let subComponentPortal = new ComponentPortal(this.subComponentType);
    //let subComponentPortal = new ComponentPortal(SubComponent2);
    this.selectedPortal = subComponentPortal;

    //DomPortalHost

  }
}