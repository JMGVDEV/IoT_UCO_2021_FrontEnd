import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentServiceService } from '../../shared/service/appointment-service.service';

@Component({
  selector: 'app-get-appointment',
  templateUrl: './get-appointment.component.html',
  styleUrls: ['./get-appointment.component.css']
})
export class GetAppointmentComponent implements OnInit {


  public appointment$!: Observable<any[]>;
  constructor(
    private appointmentService: AppointmentServiceService
  ) { }

  ngOnInit(): void {
    this.appointment$ = this.appointmentService.getAppointment();
  }

}
