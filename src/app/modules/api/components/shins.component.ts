import { AfterViewInit, Component } from '@angular/core';

import { setupLanguages } from './_lang';
import { loadToc } from './_toc';

import * as $ from 'jquery';
import innerHtml from './innerHtml';

@Component({
  selector: 'app-shins',
  templateUrl: './shins.component.html',
  styleUrls: ['./shins.component.scss']
})

export class ShinsComponent implements AfterViewInit {
  public innerHtml = innerHtml;

  ngAfterViewInit(): void {
    loadToc(
      $('#toc'),
      '.toc-link',
      '.toc-list-h2, .toc-list-h3, .toc-list-h4, .toc-list-h5, .toc-list-h6',
      10
    );

    setupLanguages($('.shins-wrapper').data('languages'));

  }
}
