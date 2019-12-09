import { NgModule } from '@angular/core';

import { ApiComponent } from './api.component';

import { SharedModule } from '../shared/shared.module';
import { ApiRoutingModule } from './api.routing';

@NgModule({
  declarations: [
    ApiComponent
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
