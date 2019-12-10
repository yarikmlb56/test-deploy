import { NgModule } from '@angular/core';

import { ApiComponent } from './api.component';

import { SharedModule } from '../shared/shared.module';
import { ApiRoutingModule } from './api.routing';
import {SafeHtmlPipe, ShinsComponent} from "./components/shins.component";

@NgModule({
  declarations: [
    ApiComponent,
    ShinsComponent,
    SafeHtmlPipe,
  ],
  imports: [
    SharedModule,
    ApiRoutingModule
  ],
  providers: [],
  exports: [
    ApiComponent,
  ],
})
export class ApiModule {}
