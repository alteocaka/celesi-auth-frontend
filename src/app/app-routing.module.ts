import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { MainComponent } from './layout/main/main.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { NonAuthGuard } from './auth/non-auth.guard';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UserDetailsComponent } from './layout/user-details/user-details.component';
import { RestrictedComponent } from './shared/components/restricted-layout/restricted.component';
import { DaysCheckinComponent } from './pages/days-checkin/containers/days-checkin/days-checkin.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    // component: LoginLayoutComponent,
    component: LoginComponent,
    canActivate: [NonAuthGuard],
    children: [],
  },
  {
    path: '',
    component: MainComponent,
    children: [
      // Per tu fshire:
      {
        path: '',
        // component: MainLayoutComponent,
        component: DaysCheckinComponent,
        canActivate: [AuthGuard],
        children: [],
      },
      {
        path: 'admin',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard, AdminGuard],
        children: [],
      },
      {
        path: 'user-details/:userId',
        component: UserDetailsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'restricted',
        component: RestrictedComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'users',
        loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
        canActivate: [AuthGuard, AdminGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
