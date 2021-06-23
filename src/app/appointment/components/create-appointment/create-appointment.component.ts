import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Appointment } from '../../shared/model/appointment';
import { AuthService } from '../../../auth/services/auth.service';
import { Profile } from '../../../auth/services/profile';
import { Observable } from 'rxjs';
import { AppointmentServiceService } from '../../shared/service/appointment-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  public profile$!: Observable<Profile>;
  public profileTest!: Profile;
  public userTYasd!: String;
  

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private appointmentService: AppointmentServiceService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.profile$ = this.authService.validarToken();
    
  }

  crearAppointmentForm: FormGroup = this.formBuilder.group({
    date: [null, Validators.required],
    userId: []
  })

  create(form: FormGroup){
    const appointment: any = {
      userId: form.value.userId,
      date: form.value.date    
    }
    console.log(`${appointment.date}`)
  }

  public test(id: any){
    this.userTYasd = id;
    console.log(this.userTYasd)
  }



  public createAppointment(): void{
    
      const payload: any ={
        userId: this.userTYasd,
        date: this.crearAppointmentForm.get('date')?.value
      }

      console.log(payload.date)
      console.log(this.userTYasd)
    
      this.appointmentService.createAppointment(payload).subscribe();
      Swal.fire({
        title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Tu cita quedó registrada correctamente</small></p>',
        html: '<p class="fuente size-fuente" style="color: #ffffff"><small>El gerente en breve te dará una respuesta</small></p>',
        icon: 'success',
        confirmButtonColor: '#00e17b',
        background: '#212121',
        confirmButtonText: '<a class="fuente">Ok</a>'
      });
      this.router.navigateByUrl('/dashboard/home');
      
    
  }


 


}
