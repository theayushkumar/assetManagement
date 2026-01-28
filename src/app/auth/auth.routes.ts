import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.routes').then(m => m.LOGIN_ROUTES),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./sign-up/sign-up.routes').then(m => m.SIGN_UP_ROUTES),
  },
];
