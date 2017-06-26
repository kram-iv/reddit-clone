import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <div id="container">
      <div id="sidebar">
        Sidebar will go here
      </div>
      <div id="content">
        <div>
          Article list will go here.
        </div>
      </div>  
    </div>   
             `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
