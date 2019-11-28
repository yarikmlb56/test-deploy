import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SignInComponent } from './modules/signin/components/sign-in.component';
import { SignUpComponent } from './modules/signup/components/sign-up.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
];

export const appRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, {enableTracing: true});
