import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Profile } from 'src/app/auth/services/profile';
import { UpdatePin } from 'src/app/user/shared/model/update-pin';
import { SessionService } from 'src/app/user/shared/services/session.service';
import { UserService } from 'src/app/user/shared/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CreateUserComponent } from '../../user/components/create-user/create-user.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public profile$!: Observable<Profile>;
  public updatePinForm!: FormGroup;
  public pinPattern = "[0-9]{4}";



  constructor(
    private authService: AuthService,
    private userService: UserService,
    private sessionService: SessionService,
    private fb: FormBuilder,
    private router: Router,
    /*private createUserComponent: CreateUserComponent*/) { }

  public ngOnInit(): void {
    this.profile$ = this.authService.validarToken();
    this.updatePinForm = this.fb.group({
      pin: [null, [Validators.required, Validators.pattern(this.pinPattern)]]
    });
    
  }


  public vistaManagerActualizarPin(role: any){
    if (role == 'MANAGER'){
      return true;
  }
  else{
    return false;
  }
  }

  public updatePin(): void {
    if (this.updatePinForm.valid) {
      const { email } = jwt_decode(this.sessionService.accessToken) as any;
      const updatedPin: UpdatePin = {
        email,
        pin: this.updatePinForm.get('pin')?.value
      };
      this.userService.updatePin(updatedPin).subscribe(resp => {
        Swal.fire({
          title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Todo salió bien</small></p>',
          html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small>Tu pin de seguridad ha sido actualizado</p>',
          icon: 'success',
          confirmButtonColor: '#00e17b',
          background: '#212121',
          confirmButtonText: '<a class="fuente">Ok</a>'
        });
        this.router.navigateByUrl('/dashboard/home');
      });
    }
  }

  public onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      //this.createUserComponent.registerUserForm.get('profile')?.setValue(file);
      const formData = new FormData();
      formData.append('photo', file);
      console.log(formData);
      this.userService.setImageUser(formData).subscribe();
  
    }   
  }
  
}