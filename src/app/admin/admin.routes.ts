import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'admin-dashboard',
    pathMatch:'full'
  },
  {
    path: 'admin-dashboard',
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.routes').then(
        (m) => m.ADMIN_DASHBOARD_ROUTES,
      ),
  },
  {
    path: 'admin-profile',
    loadChildren: () =>
      import('./admin-profile/admin-profile.routes').then(
        (m) => m.ADMIN_PROFILE_ROUTES,
      ),
  },
  {
    path: 'assgin-management',
    loadChildren: () =>
      import('./assgin-management/assgin-management.routes').then(
        (m) => m.ASSGIN_MANAGEMENT_ROUTES,
      ),
  },
  {
    path: 'employee-management',
    loadChildren: () =>
      import('./employee-management/employee-management.routes').then(
        (m) => m.EMPLOYEE_MANAGEMENT_ROUTES,
      ),
  },
  {
    path: 'product-management',
    loadChildren: () =>
      import('./product-management/product-management.routes').then(
        (m) => m.PRODUCT_MANAGEMENT_ROUTES,
      ),
  },
];
