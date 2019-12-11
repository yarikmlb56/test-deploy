import { NgModule } from '@angular/core';

import { ApiComponent } from './api.component';

import { SharedModule } from '../shared/shared.module';
import { ApiRoutingModule } from './api.routing';
import { ShinsComponent } from './components/shins.component';

@NgModule({
  declarations: [
    ApiComponent,
    ShinsComponent,
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
export class ApiModule {
}
