import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Observable } from 'rxjs';
import { Profile } from '../../../auth/services/profile';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  public profile$!: Observable<Profile>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.profile$ = this.authService.validarToken();
  }


  public vistaUser(role: any){
    if(role == 'USER'){
      return true;
    }
    else{
      return false;
    }
  }

  public vistaManager(role: any){
    if(role == 'MANAGER'){
      return true;
    }
    else{
      return false;
    }
  }

}
