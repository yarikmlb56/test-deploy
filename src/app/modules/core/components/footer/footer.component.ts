import { Component } from '@angular/core';
import { LogoType } from 'src/types/enums/logoType';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly logoType = LogoType;
}
