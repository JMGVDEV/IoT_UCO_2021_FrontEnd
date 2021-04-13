import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../shared/model/user';
import { UserRole } from '../../shared/model/user-rol.enum';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {


  

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
  }

 

  crearUserForm: FormGroup = this.formBuilder.group({
    email: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    password: [null, Validators.required],
    role: [null, Validators.required]
  })
  
  create(form: FormGroup){
    const user:User = {
      email: form.value.email,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      password: form.value.password,
      role: form.value.role
    }
    console.log(`${user.email}, ${user.firstName}, ${user.lastName}, ${user.role}`);

    if(user.role == 'USER'){
      console.log(`Rol: ${user.role}`)
    }


  }


  test(){
    console.log('test')
  }


}
