import { Portal, ComponentPortal, DomPortalHost } from '@angular/cdk/portal';
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'base-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p>{{title}}</p>
  <div #target></div>
  <ng-template [cdkPortalHost]="selectedPortal"></ng-template>
  <button (click)='createDynamicSubComponentWithLocalResolver()'>Create Dynamic Sub Component With Local Resolver</button>
  <button (click)='createDynamicSubComponentWithReceivedResolver()'>Create Dynamic Sub Component With Received Resolver</button>
  <button (click)='createDynamicSubComponentWithPortal()'>Create Dynamic Sub Component With Portal</button>

  </div>`
})
export class BaseComponent {
  title = "BaseComponentTitle";

  public subComponentType: any;
  
  public subComponentFactoryResolver: ComponentFactoryResolver;
  public componentFactoryResolver: ComponentFactoryResolver;
  
  private selectedPortal: Portal<any> = null;

  @ViewChild('target', {read: ViewContainerRef }) targetViewContainerRef: any;

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    this.componentFactoryResolver = componentFactoryResolver;
  }

  createDynamicSubComponentWithLocalResolver() {
    let subComponentFactory = this.componentFactoryResolver.resolveComponentFactory(this.subComponentType);
    this.targetViewContainerRef.createComponent(subComponentFactory);
  }

  createDynamicSubComponentWithReceivedResolver() {
    let subComponentFactory = this.subComponentFactoryResolver.resolveComponentFactory(this.subComponentType);
    this.targetViewContainerRef.createComponent(subComponentFactory);
  }

  createDynamicSubComponentWithPortal() {
    let subComponentPortal = new ComponentPortal(this.subComponentType);
    this.selectedPortal = subComponentPortal;
  }
}