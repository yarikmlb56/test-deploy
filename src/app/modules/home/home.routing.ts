import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

export const homeRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
