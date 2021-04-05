import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Profile } from 'src/app/auth/services/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile$!: Observable<Profile>;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.profile$ = this.authService.validarToken();
  }

}
