import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../shared/model/user';
import { UserService } from '../../shared/services/user.service';
import { RegisterUser } from '../../shared/model/register-user';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/auth/services/profile';
import { AuthService } from '../../../auth/services/auth.service';






@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{
  
  public profile$!: Observable<Profile>;
  public registerUserForm!: FormGroup;


  

  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  passwordPattern = "(?=.*[-!#$%&/()?¡_*])(?=.*[A-Z])(?=.*[a-z]).{8,}"

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private authService: AuthService) {

  }

  public ngOnInit(): void {
    this.profile$ = this.authService.validarToken();
    this.registerUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
      role: ['', Validators.required],
      image: ['']
    });
    
  }
  
  public vistaPowerUser(role:any){
    if (role == 'POWER_USER'){
        return true;
    }
    else{
      return false;
    }
  }

  public vistaManager(role:any){
    if (role == 'MANAGER'){
        return true;
    }
    else{
      return false;
    }
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
        this.userService.registerManager(payload).subscribe(resp =>{
            Swal.fire({
              title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Ya eres parte de IOT:UCO</small></p>',
              html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small></p>',
              icon: 'success',
              confirmButtonColor: '#00e17b',
              background: '#212121',
              confirmButtonText: '<a class="fuente">Ok</a>'
            });
            this.router.navigateByUrl('/user');
            const formData = new FormData();
            formData.append('photo', this.registerUserForm.get('image')?.value);
            console.log(formData);
            this.userService.setImageUser(formData).subscribe();
        });
        Swal.fire({
          title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>El usuario ya existe</small></p>',
          html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small>Asegurate que sea un email correcto.</p><p class="fuente size-fuente" style="color: #00e17b; font-size: 12px;"><small>En la seccion consultar usuarios puedes verificar</small></p>',
          icon: 'info',
          confirmButtonColor: '#00e17b',
          background: '#212121',
          confirmButtonText: '<a class="fuente">Ok</a>'
        });
        
      }
      else if(this.registerUserForm.get('role')?.value == 'USER'){
        this.userService.registerUser(payload).subscribe(resp =>{
          Swal.fire({
            title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Ya eres parte de IOT:UCO</small></p>',
            html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small></p>',
            icon: 'success',
            confirmButtonColor: '#00e17b',
            background: '#212121',
            confirmButtonText: '<a class="fuente">Ok</a>'
          });
          this.router.navigateByUrl('/user');
      });
      Swal.fire({
        title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>El usuario ya existe</small></p>',
        html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small>Asegurate que sea un email correcto.</p><p class="fuente size-fuente" style="color: #00e17b; font-size: 12px;"><small>En la seccion consultar usuarios puedes verificar</small></p>',
        icon: 'info',
        confirmButtonColor: '#00e17b',
        background: '#212121',
        confirmButtonText: '<a class="fuente">Ok</a>'
      });
      
      }
      else if(this.registerUserForm.get('role')?.value == 'WATCHMAN'){
        this.userService.registerWatchman(payload).subscribe(resp =>{
            Swal.fire({
              title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Ya eres parte de IOT:UCO</small></p>',
              html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small></p>',
              icon: 'success',
              confirmButtonColor: '#00e17b',
              background: '#212121',
              confirmButtonText: '<a class="fuente">Ok</a>'
            });
            this.router.navigateByUrl('/user');
        });
        Swal.fire({
          title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>El usuario ya existe</small></p>',
          html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small>Asegurate que sea un email correcto.</p><p class="fuente size-fuente" style="color: #00e17b; font-size: 12px;"><small>En la seccion consultar usuarios puedes verificar</small></p>',
          icon: 'info',
          confirmButtonColor: '#00e17b',
          background: '#212121',
          confirmButtonText: '<a class="fuente">Ok</a>'
        });
        
      }
      
      
    }

  }

  

  public onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registerUserForm.get('profile')?.setValue(file);
      const formData = new FormData();
      formData.append('photo', file);
      console.log(formData);
      this.userService.setImageUser(formData).subscribe();
    }   
  }
}
