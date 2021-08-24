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
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ToastModule } from 'primeng/toast';
import { AuthGuard } from '../auth/auth.guard';
import { AdminGuard } from '../auth/admin.guard';
import { NonAuthGuard } from '../auth/non-auth.guard';
import { RestrictedComponent } from '../shared/components/restricted-layout/restricted.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [

];
@NgModule({
  declarations: [
    MainLayoutComponent,
    LoginLayoutComponent,
    AdminLayoutComponent,
    RestrictedComponent,
    ProfileLayoutComponent,
    UserDetailsComponent,
    MainComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    TableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    CardModule,
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
    RouterModule.forChild(routes),
  ],
  exports: [
    InputTextModule,
    TableModule,
    ButtonModule,
    RadioButtonModule,
    RippleModule,
    DialogModule,
    CardModule,
    BadgeModule,
    PasswordModule,
    SidebarModule,
    MessageModule,
    MessagesModule,
  ],
  providers: [ConfirmationService],
})
export class LayoutModule {}
