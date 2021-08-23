import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './auth/admin.guard';
import { AuthGuard } from './auth/auth.guard';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RestrictedLayoutComponent } from './layout/restricted-layout/restricted-layout.component';
import { UserDetailsComponent } from './layout/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [],
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [],
  },
  {
    path:'user-details/:userId',
    component: UserDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'restricted',
    component: RestrictedLayoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./layout/pages/users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
