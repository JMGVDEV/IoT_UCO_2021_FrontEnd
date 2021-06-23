import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentServiceService } from '../../shared/service/appointment-service.service';

@Component({
  selector: 'app-get-appointment',
  templateUrl: './get-appointment.component.html',
  styleUrls: ['./get-appointment.component.css']
})
export class GetAppointmentComponent implements OnInit {

  public idCitaPorFila!: String;

  public appointment$!: Observable<any[]>;
  constructor(
    private appointmentService: AppointmentServiceService
  ) { }

  ngOnInit(): void {
    this.appointment$ = this.appointmentService.getAppointment();
  }

  public accept(id: String){
    this.idCitaPorFila = id;
    console.log(this.idCitaPorFila)
    this.appointmentService.acceptAppointment(this.idCitaPorFila).subscribe();
  }

  public reject(id: String){
    this.idCitaPorFila = id;
    console.log(this.idCitaPorFila)
    this.appointmentService.rejectAppointment(this.idCitaPorFila).subscribe();
  }


}
