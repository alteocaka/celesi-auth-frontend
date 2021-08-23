import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { MessageModule } from 'primeng/message';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { RestrictedLayoutComponent } from './restricted-layout/restricted-layout.component';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ToastModule } from 'primeng/toast';
import { AuthGuard } from '../auth/auth.guard';
import { AdminGuard } from '../auth/admin.guard';


export const routes: Routes = [
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
]
@NgModule({
  declarations: [
    MainLayoutComponent,
    LoginLayoutComponent,
    AdminLayoutComponent,
    RestrictedLayoutComponent,
    ProfileLayoutComponent,
    UserDetailsComponent,
  ],
  imports: [
    TableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    ConfirmDialogModule,
    BadgeModule,
    RippleModule,
    PasswordModule,
    SidebarModule,
    RouterModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    InputTextModule,
    TableModule,
    ButtonModule,
    RadioButtonModule,
    RippleModule,
    DialogModule,
    BadgeModule,
    PasswordModule,
    SidebarModule,
    MessageModule,
    MessagesModule,
  ],
  providers: [ConfirmationService],
})
export class LayoutModule { }
