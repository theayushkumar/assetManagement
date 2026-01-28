import { Routes } from '@angular/router';

export const EMPLOYEE_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'emp-dashboard',
    pathMatch: 'full',
  },
  {
    path: 'emp-dashboard',
    loadChildren: () =>
      import('./emp-dashboard/emp-dashboard.routes').then(
        (m) => m.EMP_DASHBOARD_ROUTES,
      ),
  },
  {
    path: 'emp-profile',
    loadChildren: () =>
      import('./emp-profile/emp-profile.routes').then(
        (m) => m.EMP_PROFILE_ROUTES,
      ),
  },
];
