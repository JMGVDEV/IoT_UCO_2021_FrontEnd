import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/auth/services/profile';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  public deleteUserForm!: FormGroup;
  public profile$!: Observable<Profile>;
  public registerUserForm!: FormGroup;

  
  constructor(private FormBuilder: FormBuilder, private userService: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.profile$ = this.authService.validarToken();
    this.deleteUserForm = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
    })
  }

  public deleteUser(){
    if(this.deleteUserForm.valid){
      const payload = {
        email: this.deleteUserForm.get('email')?.value
      };
      this.userService.deleteUser(payload.email).subscribe(resp =>{
        Swal.fire({
          title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Usuario Eliminado con Éxito</small></p>',
          html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small>Puedes consultarlo aquí</p>',
          icon: 'success',
          confirmButtonColor: '#00e17b',
          background: '#212121',
          confirmButtonText: '<a class="fuente">Ok</a>'
        });
        this.router.navigateByUrl('user/get');
      });
      Swal.fire({
        title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Usuario no Encontrado</small></p>',
        html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small>Asegurate que sea un email correcto.</p><p class="fuente size-fuente" style="color: #00e17b; font-size: 12px;"><small>En la seccion consultar usuarios puedes verificar</small></p>',
        icon: 'info',
        confirmButtonColor: '#00e17b',
        background: '#212121',
        confirmButtonText: '<a class="fuente">Ok</a>'
      });
    }
    
    }

    public powerUser(role:any){
      if (role == 'POWER_USER'){
          return true;
      }
      else{
        return false;
      }
    }


}
