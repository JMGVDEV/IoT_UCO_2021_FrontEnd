import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../shared/model/user';
import { UserService } from '../../shared/services/user.service';
import { RegisterUser } from '../../shared/model/register-user';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public registerUserForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService ) {

  }

  public ngOnInit(): void {
    this.registerUserForm = this.formBuilder.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  public crearManager(): void {
    if (this.registerUserForm.valid) {
      const payload: RegisterUser = {
        email: this.registerUserForm.get('email')?.value,
        firstName: this.registerUserForm.get('firstName')?.value,
        lastName: this.registerUserForm.get('lastName')?.value,
        password: this.registerUserForm.get('password')?.value,
        role: this.registerUserForm.get('role')?.value
      };
    

      if(this.registerUserForm.get('role')?.value == 'MANAGER'){
        this.userService.registerManager(payload).subscribe();
      }
      else if(this.registerUserForm.get('role')?.value == 'USER'){
        this.userService.registerUser(payload).subscribe();
      }
      else if(this.registerUserForm.get('role')?.value == 'WATCHMAN'){
        this.userService.registerWatchman(payload).subscribe();
      }


      
      console.log(this.registerUserForm.get('email')?.value)
    }
  }


  public onFileSelected(event: any): void {
    console.log(event.target.files[0]);
  }
}
