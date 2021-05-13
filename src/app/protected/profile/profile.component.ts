import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Profile } from 'src/app/auth/services/profile';
import { UpdatePin } from 'src/app/user/shared/model/update-pin';
import { SessionService } from 'src/app/user/shared/services/session.service';
import { UserService } from 'src/app/user/shared/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile$!: Observable<Profile>;
  public updatePinForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private sessionService: SessionService,
    private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.profile$ = this.authService.validarToken();
    this.updatePinForm = this.fb.group({
      pin: [null, Validators.required]
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

      this.userService.updatePin(updatedPin).subscribe();
    }
  }
}
