import { Component } from '@angular/core';

import { Page } from '../../../../../interfaces/page';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})

export class NavigationComponent {
  readonly pages: Page[] = [
    {name: 'APIs', link: '#'},
  ];
}
