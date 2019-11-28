import { Component } from '@angular/core';
import { ReferenceNavItem } from '../../../../../../../interfaces/referenceNavItem';

@Component({
  selector: 'app-reference-nav',
  templateUrl: './reference-nav.component.html',
  styleUrls: ['./reference-nav.component.scss']
})

export class ReferenceNavComponent {
  readonly referenceNavItems: ReferenceNavItem[] = [
    {
      name: 'Sales Tax APIs',
      link: '#',
      description: `Doing business in the U.S. presents a labyrinth of taxing jurisdictions and never-ending changes
       to rules and rates. You’ll need a corporate tax partner who knows the ropes.`
    }
  ];
}