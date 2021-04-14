import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPowerUser } from '../../interfaces/register-power-user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;

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

      this.authService.registerPowerUser(payload).subscribe();
    }
  }

  public onFileSelected(event: any): void {
    console.log(event.target.files[0]);
  }
}
