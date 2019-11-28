import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routing';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
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
