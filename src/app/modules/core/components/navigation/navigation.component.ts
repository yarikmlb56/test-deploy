import { Component, OnInit } from '@angular/core';

import { NavigationItem } from '../../../../../types/interfaces/navigation-item';
import { LogoType } from 'src/types/enums/logoType';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  readonly logoType = LogoType;
  readonly navigationItems: NavigationItem[] = [
    {label: 'APIs', route: 'api', children: [{
        label: 'APIs', route: 'api'
      }]
    }
  ];

  public isDropdownOpened = false;

  ngOnInit(): void {
  }

  handleMouseEnter(event: Event, navigationItem: NavigationItem): void {
    if (this.hasDropdown(navigationItem)) {
      this.isDropdownOpened = true;
    }
  }

  handleMouseLeave(event: Event): void {
    this.isDropdownOpened = false;
  }

  private hasDropdown(navItem: NavigationItem): boolean {
    return !!navItem.children && !!navItem.children.length;
  }
}
