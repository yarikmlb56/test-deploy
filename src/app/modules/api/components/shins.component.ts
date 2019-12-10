import {AfterViewInit, Component, NO_ERRORS_SCHEMA, Pipe, PipeTransform} from '@angular/core';
import {ViewEncapsulation} from "@angular/cli/lib/config/schema";
import innerHtml from './innerHtml';

import { loadToc } from './_toc';

import * as $ from 'jquery';
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
var window: any;

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
    console.log(20, $('div.toc-list-h1'));
    loadToc($('#toc'), '.toc-link', '.toc-list-h2, .toc-list-h3, .toc-list-h4, .toc-list-h5, .toc-list-h6', 10);
    // $(function() {
    //   console.log(19);
    // console.log(23, window);
    // window.loadToc($('#toc'), '.toc-link', '.toc-list-h2, .toc-list-h3, .toc-list-h4, .toc-list-h5, .toc-list-h6', 10);
      // setupLanguages(['python', 'ruby']);
      // $('.content').imagesLoaded( function() {
      //   recacheHeights();
      //   refreshToc();
      // });
    // });

    // window.onpopstate = function() {
    //   activateLanguage(getLanguageFromQueryString());
    // };
  }

  constructor( private route: ActivatedRoute, private router: Router ) {}

  onAnchorClick ( ) {
    // this.route.fragment.subscribe ( f => {
    //   const element = document.querySelector( "#" + f )
    //   if ( element ) element.scrollIntoView ( element )
    // });
  }
}
