import { Component, Input } from '@angular/core';

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
  template: `
      <div id="content">
        <div>
          <h2> {{ article.title }} </h2>
        </div>
      </div>
    `
})

export class ArticleComponent {
  @Input('article') article: Object;
}

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <div id="container">
      <app-sidebar></app-sidebar>
      <app-article [article] = "article">       </app-article>
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
