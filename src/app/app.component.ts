import { Component, Input } from '@angular/core';

class Article {
  //public title: String;
  //public description: String;

  constructor (
    //aTitle: string,
    //aDescription: string,
    public title: String,
    public description: String
  ) {
    //this.title = aTitle;
    //this.description = aDescription;
  }
}
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
          <p> {{ article.description }} </p>
        </div>
      </div>
    `
})

export class ArticleComponent {
  @Input('article') article: Article;
}

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <div id="container">
      <app-sidebar></app-sidebar>
      <app-article 
        *ngFor="let article of articles"
        [article] = "article">       </app-article>
    </div>   
             `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article(
        'The Angular 2 screencast',
        'Easiest way to learn angular is fullstack.io'
      ),
      new Article(
        'Fullstack React',
        'Wanns learn react too!!'
      ),
      new Article(
        'Vue is new',
        'Pretty cool syntax too!!'
      ),
      new Article(
        'But what about elm',
        'Everyone like elm... right!!'
      )];
  }
}
