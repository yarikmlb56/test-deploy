import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'title';

  getTitle(): string {
    return this.title;
  }

  getNewTitle(): string {
    return 'title2';
  }

}
