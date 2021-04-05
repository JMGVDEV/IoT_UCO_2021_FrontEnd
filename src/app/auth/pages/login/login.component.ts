import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginBody } from '../../interfaces/interfaces';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  controlAcceso = "Ok";
  controlDenegado = " ";



  formLogin: FormGroup = this.fb.group({
    email: ['spidy@gmail.com',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(2)]]
  });


  constructor(private fb: FormBuilder, 
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){


    
    console.log(this.formLogin.value.email);
    console.log(this.formLogin.valid);
    
    const {email, password} = this.formLogin.value;
    const loginBody: LoginBody = {
      username:email, password
    }
    this.authService.login(loginBody).subscribe( resp => {
      console.log(resp)
      if (resp == true){
        this.router.navigateByUrl('/dashboard');
        Swal.fire({
          title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Bienvenido</small></p>',
          html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small>Chevere tenerte de vuelta</p>',
          icon: 'success',
          confirmButtonColor: '#00e17b',
          background: '#212121', 
          confirmButtonText: '<a class="fuente">Ok</a>'
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
    });
  }


}
