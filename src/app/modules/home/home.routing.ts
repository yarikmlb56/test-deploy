import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

export const HomeRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
