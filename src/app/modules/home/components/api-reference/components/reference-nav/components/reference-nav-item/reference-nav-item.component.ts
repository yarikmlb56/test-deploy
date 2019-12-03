import { Component, Input } from '@angular/core';
import { ReferenceNavItem } from '../../../../../../../../../types/interfaces/referenceNavItem';

@Component({
  selector: 'app-reference-nav-item',
  templateUrl: './reference-nav-item.component.html',
  styleUrls: ['./reference-nav-item.component.scss']
})

export class ReferenceNavItemComponent {
  @Input() referenceNavItem: ReferenceNavItem;
}
