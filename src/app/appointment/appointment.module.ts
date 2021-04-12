import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { GetAppointmentComponent } from './components/get-appointment/get-appointment.component';
import { DeleteAppointmentComponent } from './components/delete-appointment/delete-appointment.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ProtectedModule } from '../protected/protected.module';


@NgModule({
  declarations: [CreateAppointmentComponent, GetAppointmentComponent, DeleteAppointmentComponent, AppointmentComponent],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    ProtectedModule
  ]
})
export class AppointmentModule { }
