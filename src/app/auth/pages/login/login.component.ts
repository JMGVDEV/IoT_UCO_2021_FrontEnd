import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginBody } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';
import { SessionService } from 'src/app/user/shared/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  passwordPattern = "(?=.*[-!#$%&/()?¡_*])(?=.*[A-Z])(?=.*[a-z]).{8,}"
  public controlAcceso = "Ok";
  public controlDenegado = " ";

  public formLogin: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private sessionService: SessionService) { }

  public login(): void {
    const {email, password} = this.formLogin.value;

    const loginBody: LoginBody = {
      username: email, password
    };
    if(this.formLogin.valid){
      this.authService.login(loginBody).subscribe(resp => {
        if(resp.accessToken){
          Swal.fire({
            title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Bienvenido</small></p>',
            html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small>Chevere tenerte de vuelta</p>',
            icon: 'success',
            confirmButtonColor: '#00e17b',
            background: '#212121',
            confirmButtonText: '<a class="fuente">Ok</a>'
          });
          this.router.navigateByUrl('/dashboard');
          this.sessionService.accessToken = resp.accessToken;
        }
        else if(resp){
          Swal.fire({
            title: '<p class="fuente size-fuente" style="color: #FF8A80"><small>Error de Autenticación</small></p>',
            html: '<p class="fuente size-fuente" style="color: #ffffff"><small>Verifica las credenciales e intente nuevamente</small></p>',
            icon: 'error',
            confirmButtonColor: '#00e17b',
            background: '#212121',
            confirmButtonText: '<a class="fuente">Intentar de nuevo</a>'
          });
        }
    });
    
    }
    else{
      Swal.fire({
        title: '<p class="fuente size-fuente" style="color: #FF8A80"><small>Error de Autenticación</small></p>',
        html: '<p class="fuente size-fuente" style="color: #ffffff"><small>Verifica las credenciales e intente nuevamente</small></p>',
        icon: 'error',
        confirmButtonColor: '#00e17b',
        background: '#212121',
        confirmButtonText: '<a class="fuente">Intentar de nuevo</a>'
      });
    }
     
  }
}
