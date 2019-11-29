import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in.routing';
import { SignInComponent } from './sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    SignInRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    SignInComponent,
  ],
})
export class SignInModule {}
