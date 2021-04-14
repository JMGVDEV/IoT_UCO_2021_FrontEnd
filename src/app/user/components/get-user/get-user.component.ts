import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/model/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  public users$!: Observable<User[]>;

  constructor(private userService: UserService) { }

  public ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

}
