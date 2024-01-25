import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: 
  `<h1>{{title}}</h1>
  <a routerLink="/moduleA/componentA">Component A</a>
  <a routerLink="/moduleA/componentB">Component B</a>
  <a routerLink="/moduleB/componentC">Component C</a>
  <a routerLink="/moduleB/componentD">Component D</a>
  <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = "AppComponentTitle";
  
  public doSomething() {
    this.title += "!";
  }

}