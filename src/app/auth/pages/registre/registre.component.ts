import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPowerUser } from '../../interfaces/register-power-user';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;
  status: boolean = false;
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  public ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public handleFormSubmit(): void {
    if (this.registerForm.valid) {
      const payload: RegisterPowerUser = {
        email: this.registerForm.get('email')?.value,
        firstName: this.registerForm.get('firstName')?.value,
        lastName: this.registerForm.get('lastName')?.value,
        password: this.registerForm.get('password')?.value,
      };
    
      this.authService.registerPowerUser(payload).subscribe(resp =>{
          Swal.fire({
            title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Bienvenido</small></p>',
            html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small>Chevere tenerte de vuelta</p>',
            icon: 'success',
            confirmButtonColor: '#00e17b',
            background: '#212121',
            confirmButtonText: '<a class="fuente">Ok</a>'
          });

          console.log('ewasd')
    

      });
    }
    else{
      Swal.fire({
        title: '<p class="fuente size-fuente" style="color: #FF8A80"><small>Error en el Registro</small></p>',
        html: '<p class="fuente size-fuente" style="color: #ffffff"><small>Verifica las credenciales e intente nuevamente</small></p>',
        icon: 'error',
        confirmButtonColor: '#00e17b',
        background: '#212121',
        confirmButtonText: '<a class="fuente">Intentar de nuevo</a>'
      });
    }
    
    console.log("pasa")
  }

  public onFileSelected(event: any): void {
    console.log(event.target.files[0]);
  }
}
