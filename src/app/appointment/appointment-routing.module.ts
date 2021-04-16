import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { DeleteAppointmentComponent } from './components/delete-appointment/delete-appointment.component';
import { GetAppointmentComponent } from './components/get-appointment/get-appointment.component';

const routes: Routes = [

  {
    path: '',
    component: AppointmentComponent,
    children:[
      {
        path: 'create',
        component: CreateAppointmentComponent
      },
      {
        path: 'get',
        component: GetAppointmentComponent
      },
      {
        path: 'delete',
        component: DeleteAppointmentComponent
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
export class AppointmentRoutingModule { }
