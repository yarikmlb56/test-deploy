import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BannerSectionComponent } from './components/banner-section/banner-section.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    InputComponent,
    BannerSectionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputComponent,
    BannerSectionComponent,
  ],
})
export class SharedModule {}
