import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SignUpComponent } from './modules/signup/components/sign-up.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./modules/signin/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
];

export const AppRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, {enableTracing: true});
