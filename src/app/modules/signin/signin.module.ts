import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './components/sign-in.component';

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [
    SignInComponent,
  ],
})
export class SignInModule {}
