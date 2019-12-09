import { Component } from '@angular/core';
import { NavigationItem } from '../../../../../../types/interfaces/navigation-item';

@Component({
  selector: 'app-navigation-dropdown',
  templateUrl: './navigation-dropdown.component.html',
  styleUrls: ['./navigation-dropdown.component.scss']
})

export class NavigationDropdownComponent {
  readonly navigationItems: NavigationItem[] = [
    { label: 'APIs', route: 'api'}
  ];
}
