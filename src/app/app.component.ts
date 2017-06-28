import { Component } from '@angular/core';

@Component ({
  selector: 'app-sidebar',
  template:`
      <div id="sidebar">
        Sidebar will go here
      </div>`
})
export class SidebarComponent {}

@Component ({
  selector: 'app-article',
  template:`
      <div id="content">
        <div>
          Article list will go here.
        </div>
      </div>
    `
})
export class ArticleComponent {}

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <div id="container">
      <app-sidebar></app-sidebar>
      <app-article></app-article>
    </div>   
             `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  article: Object;

  constructor() {
    this.article = {
      title: 'The Angular 2 screencast',
      description: 'Easiest way to learn angular is fullstack.io'
    }
  }
}
