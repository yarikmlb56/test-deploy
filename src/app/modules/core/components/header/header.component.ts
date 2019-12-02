import { Component } from '@angular/core';

import { LinkConfig } from 'src/types/interfaces/link-config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: LinkConfig[] = [
    { route: '/sign-in', label: 'Login' },
    { route: '/sign-up', label: 'Create account' }
  ];
}
