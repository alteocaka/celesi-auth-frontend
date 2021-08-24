import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './containers/all-users/all-users.component';
import { CreateUserComponent } from './containers/create-user/create-user.component';
import { EditUserComponent } from './containers/edit-user/edit-user.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UserDetailsComponent } from './containers/user-details/user-details.component';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { UserDaysTableComponent } from './components/user-days-table/user-days-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


const routes: Routes = [
  {
    path: '',
    component: AllUsersComponent
  },
  {
    path: 'create',
    component: CreateUserComponent
  },
  {
    path: 'edit/:userId',
    component: EditUserComponent
  },
  {
    path: 'details/:userId',
    component: UserDetailsComponent
  }
]

@NgModule({
  declarations: [
    AllUsersComponent,
    CreateUserComponent,
    EditUserComponent,
    UsersTableComponent,
    UsersFormComponent,
    UserDetailsComponent,
    UserDaysTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    TableModule,
    ButtonModule,
    RippleModule,
    BadgeModule
  ]
})
export class UsersModule {
}
