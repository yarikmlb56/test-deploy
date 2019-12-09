import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ApiComponent } from './api.component';

const routes: Routes = [
  {
    path: '',
    component: ApiComponent
  }
];

export const ApiRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
