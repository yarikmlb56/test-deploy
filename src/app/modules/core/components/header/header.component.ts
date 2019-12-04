import { Component } from '@angular/core';

import { NavigationItem } from 'src/types/interfaces/navigation-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: NavigationItem[] = [
    { route: '/sign-in', label: 'Login' },
    { route: '/sign-up', label: 'Create account' }
  ];
}
