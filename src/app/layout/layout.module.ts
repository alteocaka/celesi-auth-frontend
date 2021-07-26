import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';




@NgModule({
  declarations: [
    MainLayoutComponent,
    LoginLayoutComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    RippleModule,
    PasswordModule,
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    RippleModule,
    PasswordModule,
  ]
})
export class LayoutModule { }
