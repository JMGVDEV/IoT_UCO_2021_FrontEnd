import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  mostrarInfo: boolean = true;

  constructor(private router: Router) { }
  
  

  ngOnInit(): void {
  }

  nuevo(){
      this.router.navigateByUrl('/user/create');
      
      console.log('HelloWorld')
  }

}
