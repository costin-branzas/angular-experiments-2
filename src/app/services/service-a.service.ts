import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core'
import { BaseComponent } from '../common-components/base-component.component';


@Injectable()
export class ServiceA {
    counter: number;
    componentFactoryResolver: ComponentFactoryResolver;

    constructor(componentFactoryResolver: ComponentFactoryResolver) {
        console.log("ServiceA constructor");
        
        this.counter = 0;
        this.componentFactoryResolver = componentFactoryResolver;
    }

    sayHello() {
        this.counter++;
        console.log("Hello from ServiceA! (counter=" + this.counter + ")");
    }

    createBaseComponent(viewContainerRef: ViewContainerRef, typeOfSubComponent: any, subComponentFactoryResolver: ComponentFactoryResolver) {
        let baseComponentFactory = this.componentFactoryResolver.resolveComponentFactory(BaseComponent);
        let baseComponentRef:ComponentRef<BaseComponent> = viewContainerRef.createComponent(baseComponentFactory);

        let baseComponentInstace = baseComponentRef.instance;

        // set references in the base component so that the base component knows:
        // what type of sub-component to instantiate
        baseComponentInstace.subComponentType = typeOfSubComponent;
        // and what factoryResolver to use
        baseComponentInstace.subComponentFactoryResolver = subComponentFactoryResolver;
    }
}