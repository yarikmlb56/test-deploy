import { Component, Input } from '@angular/core';

import { LogoType } from 'src/types/enums/logoType';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})

export class LogoComponent {
  @Input() type: LogoType;
}
