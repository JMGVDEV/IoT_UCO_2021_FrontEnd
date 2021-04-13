import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Appointment } from '../../shared/model/appointment';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  crearAppointmentForm: FormGroup = this.formBuilder.group({
    userId: [null, Validators.required],
    date: [null, Validators.required]
  })

  create(form: FormGroup){
    const appointment: Appointment = {
      userId: form.value.userId,
      date: form.value.date    
    }
    console.log(`${appointment.userId}, ${appointment.date}`)
  }



 


}
