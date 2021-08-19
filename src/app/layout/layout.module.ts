import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { MessageModule } from 'primeng/message';
import { RippleModule } from 'primeng/ripple';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { RestrictedLayoutComponent } from './restricted-layout/restricted-layout.component';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';
import { UserDetailsComponent } from './user-details/user-details.component';

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
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    ConfirmDialogModule,
    RippleModule,
    PasswordModule,
    SidebarModule,
    RouterModule,
    MessagesModule,
    MessageModule,
  ],
  exports: [
    InputTextModule,
    TableModule,
    ButtonModule,
    RadioButtonModule,
    RippleModule,
    PasswordModule,
    SidebarModule,
    MessageModule,
    MessagesModule,
  ],
  providers: [ConfirmationService],
})
export class LayoutModule {}
