import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { homeRoutingModule } from './home.routing';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    homeRoutingModule,
    CommonModule,
  ],
  providers: [],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule {
}