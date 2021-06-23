import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Appointment } from '../../shared/model/appointment';
import { AuthService } from '../../../auth/services/auth.service';
import { Profile } from '../../../auth/services/profile';
import { Observable } from 'rxjs';
import { AppointmentServiceService } from '../../shared/service/appointment-service.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  public profile$!: Observable<Profile>;
  public profileTest!: Profile;
  

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private appointmentService: AppointmentServiceService) { }

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
    this.profileTest.id = id;
    console.log(id)
  }



  public createAppointment(): void{
    
      const payload: any ={
        userId: this.test,
        date: this.crearAppointmentForm.get('date')?.value
      }

      console.log(payload.date)
      //this.appointmentService.createAppointment(payload).subscribe();
    
  }


 


}
