import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.scss']
})

export class BannerSectionComponent {
  @Input() title: string;

  @Input() subTitle: string;
}
