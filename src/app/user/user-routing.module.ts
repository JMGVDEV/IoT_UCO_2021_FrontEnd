import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { GetUserComponent } from './components/get-user/get-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children:[
      {
        path: 'create',
        component: CreateUserComponent
      },
      {
        path: 'get',
        component: GetUserComponent
      },
      {
        path: 'delete',
        component: DeleteUserComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
