import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationDropdownComponent } from './components/navigation/components/navigation-dropdown.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    NavigationDropdownComponent,
    LogoComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [],
  exports: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
