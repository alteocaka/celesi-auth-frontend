import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './containers/all-users/all-users.component';
import { CreateUserComponent } from './containers/create-user/create-user.component';
import { EditUserComponent } from './containers/edit-user/edit-user.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UserDetailsComponent } from './containers/user-details/user-details.component';


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
    path:'details/:userId',
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
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
