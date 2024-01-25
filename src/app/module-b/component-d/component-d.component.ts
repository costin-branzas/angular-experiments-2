import { Component } from '@angular/core';


@Component({
  selector: 'component-d',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p>{{title}}</p>
  
  </div>`
})
export class ComponentD {
  title = "ComponentDTitle";

}