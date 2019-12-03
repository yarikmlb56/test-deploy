import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';

/* tslint:disable-next-line */
export const coreModuleImports: Array<Type<any> | ModuleWithProviders<{}> | any[]> = [
  CommonModule,
  RouterModule,
];

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    LogoComponent,
    FooterComponent,
  ],
  imports: coreModuleImports,
  providers: [],
  exports: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
