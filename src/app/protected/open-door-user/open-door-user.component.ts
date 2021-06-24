import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Profile } from 'src/app/auth/services/profile';
import Swal from 'sweetalert2';
import { OpenDoorDto } from '../open-door/shared/model/open-door-manager';
import { OpenDoorUserService } from './shared/service/open-door-user.service';

@Component({
  selector: 'app-open-door-user',
  templateUrl: './open-door-user.component.html',
  styleUrls: ['./open-door-user.component.css']
})
export class OpenDoorUserComponent implements OnInit {

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

  public onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.openDoorForm.get('profile')?.setValue(file);
      const formData = new FormData();
      formData.append('photo', file);
      formData.append('pin', this.openDoorForm.get('pin')?.value);
      console.log(formData);
      this.userDoorService.validateUser(formData).subscribe(res => {
        Swal.fire({
          title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Cara reconocida correctamente</small></p>',
          html: '<p class="fuente size-fuente" style="color: #ffffff"><small>Ya tienes acceso a la puerta.</small></p>',
          icon: 'success',
          confirmButtonColor: '#00e17b',
          background: '#212121',
          confirmButtonText: '<a class="fuente">Ok</a>'
        });
        this.validateFace = false;
      }, () => {
        this.validateFace = true;
        Swal.fire({
          title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>La imagen cargada no coincide con su cara</small></p>',
          html: '<p class="fuente size-fuente" style="color: #ffffff"><small>Intentelo de nuevo o contacte al administrador.</small></p>',
          icon: 'error',
          confirmButtonColor: '#00e17b',
          background: '#212121',
          confirmButtonText: '<a class="fuente">Ok</a>'
        });
      });
    }   
  }

  public closeDoorUser() {
    const openDoorDto: OpenDoorDto = {
      pin: this.openDoorForm.get('pin')?.value
    }
    this.userDoorService.closeBox(openDoorDto).subscribe(() => {
      Swal.fire({
        title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Puerta cerrada correctamente</small></p>',
        html: '<p class="fuente size-fuente" style="color: #ffffff"><small>Tus pertenencias están a salvo.</small></p>',
        icon: 'success',
        confirmButtonColor: '#00e17b',
        background: '#212121',
        confirmButtonText: '<a class="fuente">Ok</a>'
      });
    });
  }

  public openDoorUser() {
    const openDoorDto: OpenDoorDto = {
      pin: this.openDoorForm.get('pin')?.value
    }
    this.userDoorService.openBox(openDoorDto).subscribe(() => {
      Swal.fire({
        title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Puerta abierta correctamente</small></p>',
        html: '<p class="fuente size-fuente" style="color: #ffffff"><small>Ya puedes acceder.</small></p>',
        icon: 'success',
        confirmButtonColor: '#00e17b',
        background: '#212121',
        confirmButtonText: '<a class="fuente">Ok</a>'
      });
    }, err => {
      Swal.fire({
        title: '<p class="fuente size-fuente" style="color: #80d8ff"><small>Hubo un error</small></p>',
        html: `<p class="fuente size-fuente" style="color: #ffffff"><small>${err.error.message}.</small></p>`,
        icon: 'error',
        confirmButtonColor: '#00e17b',
        background: '#212121',
        confirmButtonText: '<a class="fuente">Ok</a>'
      });
    });
  }

}
