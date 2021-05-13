import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPowerUser } from '../../interfaces/register-power-user';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;
  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  passwordPattern = "(?=.*[-!#$%&/()?¡_*])(?=.*[A-Z])(?=.*[a-z]).{8,}"

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  public ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]]
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
            title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Ya eres parte de IOT:UCO</small></p>',
            html: '<p class="fuente size-fuente" style="color: #ffffff"><small></small>Chévere tenerte aquí</p>',
            icon: 'success',
            confirmButtonColor: '#00e17b',
            background: '#212121',
            confirmButtonText: '<a class="fuente">Ok</a>'
          });
          this.router.navigateByUrl('/auth/login');
      });
      
    }
      Swal.fire({
        title: '<p class="fuente size-fuente" style="color: #FF8A80"><small>Error en el Registro</small></p>',
        html: '<p class="fuente size-fuente" style="color: #ffffff"><small>El correo ingresado no esta disponible</small></p>',
        icon: 'error',
        confirmButtonColor: '#00e17b',
        background: '#212121',
        confirmButtonText: '<a class="fuente">Intentar de nuevo</a>'
      });
  }

  public onFileSelected(event: any): void {
    console.log(event.target.files[0]);
  }
}








