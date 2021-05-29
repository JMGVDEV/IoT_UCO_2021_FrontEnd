import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OpenDoorService } from './shared/service/open-door.service';
import { Profile } from '../../auth/services/profile';
import { AuthService } from '../../auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-open-door',
  templateUrl: './open-door.component.html',
  styleUrls: ['./open-door.component.css']
})
export class OpenDoorComponent implements OnInit {

  public openDoorForm!: FormGroup;
  public profile$!: Observable<Profile>;
  public pinPattern = "[0-9]{4}";


  constructor(private FormBuilder: FormBuilder,
              private doorService: OpenDoorService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.profile$ = this.authService.validarToken();
    this.openDoorForm = this.FormBuilder.group({
      image: ['', Validators.required],
      pin: ['', [Validators.required, Validators.pattern(this.pinPattern)]]
    })

  }


  public permisoVista(role:any){
    if (role == 'MANAGER'){
        return true;
    }
    else if (role == 'POWER_USER'){
      return true;
    }
    else{
      return false;
      
    }
  }

  


  public notFount(role: any){
    if(role == 'USER'){
      return true
    }
    else if(role == 'WATCHMAN'){
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




  public onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.openDoorForm.get('profile')?.setValue(file);
      const formData = new FormData();
      formData.append('photo', file);
      formData.append('pin', this.openDoorForm.get('pin')?.value);
      console.log(formData);
      this.doorService.validateUser(formData).subscribe();
    }   
  }

  public closeDoor() {
    this.doorService.closeDoor().subscribe();
  }
}
