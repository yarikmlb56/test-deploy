import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SignInComponent } from './sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  }
];

export const SignInRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
