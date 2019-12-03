import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in.routing';
import { SignInComponent } from './sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    SignInRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
  exports: [
    SignInComponent,
  ],
})
export class SignInModule {}
