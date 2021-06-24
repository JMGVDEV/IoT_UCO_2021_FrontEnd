import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { OpenDoorUserService } from '../open-door-user/shared/service/open-door-user.service';
import { AuthService } from '../../auth/services/auth.service';
import { Profile } from '../../auth/services/profile';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.css']
})
export class VaultComponent implements OnInit {
  public openDoorForm!: FormGroup;
  public profile$!: Observable<Profile>;
  public pinPattern = "[0-9]{4}";
  public validateFace = true;


  constructor(private FormBuilder: FormBuilder,
              private userDoorService: OpenDoorUserService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.profile$ = this.authService.validarToken();
    this.openDoorForm = this.FormBuilder.group({
      image: ['', Validators.required],
      pin: ['', [Validators.required, Validators.pattern(this.pinPattern)]]
    })

  }

  public permisoVista(role:any){
    if (role == 'USER'){
        return true;
    }
    else{
      return false;
      
    }
  }

  public notFount(role: any){
    if(role == 'MANAGER'){
      return true
    }
    else{
      return false
    }

  }

  public nowOpenDoor():void {
    if(this.openDoorForm.valid){
      console.log('genial')
    }
  }

}
