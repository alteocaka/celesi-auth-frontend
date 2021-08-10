import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [],
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
