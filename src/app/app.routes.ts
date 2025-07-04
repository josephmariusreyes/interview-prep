import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'rxjs',
    loadComponent: () => import('./rxjs/rxjs-smart.component').then(m => m.RxjsSmartComponent)
  },
  {
    path: 'directives',
    loadComponent: () => import('./directives/directives-smart.component').then(m => m.DirectivesSmartComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./services/services-smart.component').then(m => m.ServicesSmartComponent)
  },
  {
    path: 'signals',
    loadComponent: () => import('./signals/signals-smart.component').then(m => m.SignalsSmartComponent)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'rxjs'
  }
];
