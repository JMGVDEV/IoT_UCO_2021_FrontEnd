import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigateByUrl('/auth/login');
    console.log('HelloWorld')
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


}
