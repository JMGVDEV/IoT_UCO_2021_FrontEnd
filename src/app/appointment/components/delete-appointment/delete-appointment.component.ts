import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentServiceService } from '../../shared/service/appointment-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-appointment',
  templateUrl: './delete-appointment.component.html',
  styleUrls: ['./delete-appointment.component.css']
})
export class DeleteAppointmentComponent implements OnInit {

  public deleteAppointmentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private appointmentService: AppointmentServiceService, private router: Router) { }

  ngOnInit(): void {
    this.deleteAppointmentForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(36)]]
    })
  }

  public deleteAppointment(){
    if(this.deleteAppointmentForm.valid){
      const payload = {
        id: this.deleteAppointmentForm.get('id')?.value
      };
      this.appointmentService.deleteAppointment(payload.id).subscribe(resp =>{
        Swal.fire({
          title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Cita Eliminada con Éxito</small></p>',
          html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small></p>',
          icon: 'success',
          confirmButtonColor: '#00e17b',
          background: '#212121',
          confirmButtonText: '<a class="fuente">Ok</a>'
        });
        this.router.navigateByUrl('appointment/get');
      });
    }
    else{
      Swal.fire({
        title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Usuario no Encontrado</small></p>',
        html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small>Asegurate que sea un id correcto.</p><p class="fuente size-fuente" style="color: #00e17b; font-size: 12px;"><small>En la seccion consultar usuarios puedes verificar</small></p>',
        icon: 'info',
        confirmButtonColor: '#00e17b',
        background: '#212121',
        confirmButtonText: '<a class="fuente">Ok</a>'
      });
    }
    
    }


}
