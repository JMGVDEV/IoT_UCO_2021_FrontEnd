import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentServiceService } from '../../shared/service/appointment-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-appointment',
  templateUrl: './get-appointment.component.html',
  styleUrls: ['./get-appointment.component.css']
})
export class GetAppointmentComponent implements OnInit {

  public idCitaPorFila!: String;

  public appointment$!: Observable<any[]>;
  constructor(
    private appointmentService: AppointmentServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.appointment$ = this.appointmentService.getAppointment();
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

  public accept(id: String){
    this.idCitaPorFila = id;
    this.appointmentService.acceptAppointment(this.idCitaPorFila).subscribe(resp => {
      Swal.fire({
        title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>¡Genial! Cita aceptada.</small></p>',
        html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small></p>',
        icon: 'success',
        confirmButtonColor: '#00e17b',
        background: '#212121',
        confirmButtonText: '<a class="fuente">Ok</a>'
      });
      //this.router.navigateByUrl('appointment/get');
      this.redirectTo('/appointment/get');
    });
  }

  public complete(id: String) {
    this.idCitaPorFila = id;
    this.appointmentService.completeAppointment(this.idCitaPorFila).subscribe(resp=>{
      Swal.fire({
        title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Genia! Ha completado la cita.</small></p>',
        html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small></p>',
        icon: 'warning',
        confirmButtonColor: '#00e17b',
        background: '#212121',
        confirmButtonText: '<a class="fuente">Ok</a>'
      });
      //this.router.navigateByUrl('appointment/get');
      this.redirectTo('/appointment/get');
    });
  }

  public reject(id: String){
    this.idCitaPorFila = id;
    this.appointmentService.rejectAppointment(this.idCitaPorFila).subscribe(resp=>{
      Swal.fire({
        title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Vaya! Cita rechazada.</small></p>',
        html: '<p class="fuente size-fuente" style="color: #ffffff"><small>en cualquier momento la puede aceptar</small></p>',
        icon: 'warning',
        confirmButtonColor: '#00e17b',
        background: '#212121',
        confirmButtonText: '<a class="fuente">Ok</a>'
      });
      //this.router.navigateByUrl('appointment/get');
      this.redirectTo('/appointment/get');
    });
  }


}
