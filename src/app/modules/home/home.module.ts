import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { ApiReferenceComponent } from './components/api-reference/api-reference.component';
// tslint:disable-next-line:import-spacing
import { ReferenceTitleComponent } from
    './components/api-reference/components/reference-title/reference-title.component';
import { ReferenceNavComponent } from './components/api-reference/components/reference-nav/reference-nav.component';
// tslint:disable-next-line:import-spacing
import { ReferenceNavItemComponent } from
    './components/api-reference/components/reference-nav/components/reference-nav-item/reference-nav-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeComponent,
    ApiReferenceComponent,
    ReferenceTitleComponent,
    ReferenceNavComponent,
    ReferenceNavItemComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule,
  ],
  providers: [],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule {
}
