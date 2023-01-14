import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./layout/main/main.component";
import {BlankComponent} from "./layout/blank/blank.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // canActivate: [TokenGuard],
    children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {
        path: 'administration',
        title: 'Administration',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
      },
    ]
  },
  {
    path: 'auth',
    component: BlankComponent,
    title: 'Auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'layout',
    component: BlankComponent,
    title: 'Services Status',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
  },
  {
    path: 'mejoratec',
    component:BlankComponent,
    title: 'MEJORATEC',
    loadChildren: () => import('./pages/mejoratec/mejoratec.module').then(m => m.MejoratecModule),
  },
  // Redirections
  {
    path: '**',
    redirectTo: '/layout/not-found'
  },
  {
    path: 'login',
    redirectTo: '/auth/authentication/login'
  },
  {
    path: 'profile',
    redirectTo: '/administration/users/profile'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
