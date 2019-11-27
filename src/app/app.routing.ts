import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

export const appRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, {enableTracing: true});
