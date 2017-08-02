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
  
  public date(): Date {
    return new Date();
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
      <div class="image">
        <img src="https://placekitten.com/g/400/300">
      </div>
      <div class="content">
        <div class="header">
          {{ article.title }}
        </div>
        <div class="meta">
          Voting and votes will go here.
        </div>
        <div class="meta date">
          {{ article.date() }}
        </div>
        <div class="meta description">
          <p> {{ article.description }} </p>
        </div>
        <div class="extra">
          <a
            href="#"
            target='_blank'
            ui='ui right floated button primary'>
            Read more
            <i class='right chevron icon'></i>
          </a>
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
    <div class="ui container">
      <app-sidebar></app-sidebar>
        <div class="ui divided items">
          <app-article 
            *ngFor="let article of articles"
            [article] = "article"
            class='item'>       </app-article>
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
