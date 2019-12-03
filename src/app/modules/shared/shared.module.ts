import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputComponent } from './components/input/input.component';
/* tslint:disable-next-line */
export const sharedModuleImports: Array<Type<any> | ModuleWithProviders<{}> | any[]> = [
  CommonModule,
  ReactiveFormsModule,
];
@NgModule({
  declarations: [
    InputComponent
  ],
  imports: sharedModuleImports,
  exports: [
    InputComponent
  ],
})
export class SharedModule {}
