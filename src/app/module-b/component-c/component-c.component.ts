import { Component } from '@angular/core';

import { ServiceA } from '../../services/service-a.service';

@Component({
  selector: 'component-c',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p>{{title}}</p>
  <button (click)='useService()'>Use Service</button>
  
  </div>`
})
export class ComponentC {
  title = "ComponentCTitle";

  serviceA: ServiceA;

  constructor(serviceA: ServiceA) {
    this.serviceA = serviceA;
  }

  useService() {
    this.serviceA.sayHello();
  }

}