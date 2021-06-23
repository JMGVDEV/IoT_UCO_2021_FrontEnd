import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/auth/services/profile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public profile$!: Observable<Profile>;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.profile$ = this.authService.validarToken();
  }
  logout(){
    this.router.navigateByUrl('/auth/login');
    this.authService.logout();
    console.log('Saliendo...');
  }

  profile(){
    this.router.navigateByUrl('/dashboard/profile');
    
    console.log('HelloWorld')
  }

  explora(){
    this.router.navigateByUrl('/user');
    
    console.log('HelloWorld')
  }

  home(){
    this.router.navigateByUrl('/dashboard/home')
  }

  agenda(){
    this.router.navigateByUrl('/appointment');
  }

  recursos(){
    this.router.navigateByUrl('/dashboard/open-door')
  }

  public vault(){
    this.router.navigateByUrl('/dashboard/myvault');
  }

  public vistaUserWatchman(role: any){
    if(role == 'USER'){
      return false;
    }
    else if (role == 'WATCHMAN'){
      return false;
    }
    else{
      return true;
    }
  }


}
