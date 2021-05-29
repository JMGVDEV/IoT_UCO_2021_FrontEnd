import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Observable } from 'rxjs';
import { Profile } from '../../../auth/services/profile';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  mostrarInfo: boolean = true;
  public profile$!: Observable<Profile>;

  constructor(private router: Router, private authService: AuthService) { }
  
  

  ngOnInit(): void {
    this.profile$ = this.authService.validarToken();
  }

  nuevo(){
      this.router.navigateByUrl('/user/create');
      
      console.log('HelloWorld')
  }

  public vistaUser(role: any){
    if(role == 'USER'){
      return false
    }
    else if(role == 'WATCHMAN'){
      return false
    }
    else{
      return true
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

}
