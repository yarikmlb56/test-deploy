import {AfterViewInit, Component, Pipe, PipeTransform} from '@angular/core';
import innerHtml from './innerHtml';

import { loadToc } from './_toc';

import * as $ from 'jquery';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {
  }
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

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

  }
}
