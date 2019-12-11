import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BannerSectionComponent } from './components/banner-section/banner-section.component';
import { InputComponent } from './components/input/input.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
/* tslint:disable-next-line */
export const sharedModuleImports: Array<Type<any> | ModuleWithProviders<{}> | any[]> = [
  CommonModule,
  ReactiveFormsModule,
];
@NgModule({
  declarations: [
    InputComponent,
    BannerSectionComponent,
    SafeHtmlPipe,
  ],
  imports: sharedModuleImports,
  exports: [
    InputComponent,
    BannerSectionComponent,
    SafeHtmlPipe,
  ],
})
export class SharedModule {}
