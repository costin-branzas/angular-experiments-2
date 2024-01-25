import { Component } from '@angular/core';


@Component({
  selector: 'component-b',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">

  <p>{{title}}</p>
  
  </div>`
})
export class ComponentB {
  title = "ComponentBTitle";

}