import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ApiReferenceComponent } from './components/api-reference/api-reference.component';
// tslint:disable-next-line:import-spacing
import { ReferenceTitleComponent } from
    './components/api-reference/components/reference-title/reference-title.component';
import { ReferenceNavComponent } from './components/api-reference/components/reference-nav/reference-nav.component';
// tslint:disable-next-line:import-spacing
import { ReferenceNavItemComponent } from
    './components/api-reference/components/reference-nav/components/reference-nav-item/reference-nav-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    HomeComponent,
    ApiReferenceComponent,
    ReferenceTitleComponent,
    ReferenceNavComponent,
    ReferenceNavItemComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
  ],
  providers: [],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule {
}
