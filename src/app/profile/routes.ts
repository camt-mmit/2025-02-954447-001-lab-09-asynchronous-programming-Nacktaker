import { Routes } from '@angular/router';
import { ProfileFormPage } from './pages/profile-form-pages/profile-form-pages';
import { ProfileRoot } from './pages/profile-root-pages/profile-root-pages';
import { ProfileViewPage } from './pages/profile-view-pages/profile-view-pages';

export default [
  {
    path: '',
    component: ProfileRoot,
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },

      { path: 'view', component: ProfileViewPage },
      { path: 'form', component: ProfileFormPage },
    ],
  },
] as Routes;
