import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { GetUserComponent } from './components/get-user/get-user.component';
import { UserComponent } from './components/user/user.component';
import { ProtectedModule } from '../protected/protected.module';



@NgModule({
  declarations: [DeleteUserComponent, CreateUserComponent, GetUserComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ProtectedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
