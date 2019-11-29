import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})

export class LogoComponent {
  @Input() inverted: boolean;

  readonly logoSrc = '/assets/images/logo.svg';
  readonly invertedLogoSrc = '/assets/images/footer-logo_white.png';
}
