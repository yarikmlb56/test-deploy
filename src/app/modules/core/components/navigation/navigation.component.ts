import {Component, OnInit} from '@angular/core';

import { Page } from '../../../../../types/interfaces/page';
import { LogoType } from 'src/types/enums/logoType';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  readonly logoType = LogoType;
  readonly pages: Page[] = [
    {name: 'APIs', link: '#'},
  ];
  ngOnInit(): void {
    console.log(18, LogoType.Header);
  }
}
