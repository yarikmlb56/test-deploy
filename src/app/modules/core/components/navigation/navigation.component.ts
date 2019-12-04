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
    {label: 'APIs', route: '#'},
  ];

  public isDropdownOpened = false;

  ngOnInit(): void {
    console.log(18, LogoType.Header);
  }

  handleMouseEnter(event: Event): void {
    if (this.hasMouseEvent(event.target)) {
      this.isDropdownOpened = true;
    }
  }

  handleMouseLeave(event: Event): void {
    this.isDropdownOpened = false;
  }

  private hasMouseEvent(element: EventTarget | string): boolean {
    if (typeof element === 'string') {
      return element.toLowerCase() === 'apis';
    }

    return (element['type']).toLowerCase() === 'apis';
  }
}
