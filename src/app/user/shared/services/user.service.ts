import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UpdatePin } from '../model/update-pin';
import { User } from '../model/user';
import { RegisterUser } from '../model/register-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlBase: string = environment.urlBase;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlBase}/user/get-all-users`);
  }

  public updatePin(payload: UpdatePin): Observable<any> {
    return this.http.put(`${this.urlBase}/user/update-pin`, payload);
  }

  public registerUser(payload: RegisterUser): Observable<any> {
    return this.http.post(`${this.urlBase}/auth/register-user`, payload);
  }

  public registerManager(payload: RegisterUser): Observable<any> {
    return this.http.post(`${this.urlBase}/auth/register-manager`, payload);
  }

  public registerWatchman(payload: RegisterUser): Observable<any> {
    return this.http.post(`${this.urlBase}/auth/register-watchman`, payload);
  }
}
