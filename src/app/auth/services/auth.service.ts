import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginBody} from '../interfaces/interfaces';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Profile } from './profile';
import { RegisterPowerUser } from '../interfaces/register-power-user';
import { AuthResponse } from '../interfaces/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlBase: string = environment.urlBase;

  constructor( private http: HttpClient) { }

  public login(loginBody: LoginBody): Observable<AuthResponse> {
    const url = `${this.urlBase}/auth/login`;
    return this.http.post<AuthResponse>(url, loginBody);
  }

  public validarToken(): Observable<Profile> {
    const dir = `${this.urlBase}/auth/profile`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}` || '')
    return this.http.get<Profile>( dir, {
      headers
    } );
  }

  public registerPowerUser(payload: RegisterPowerUser): Observable<any> {
    return this.http.post(`${this.urlBase}/auth/register-power-user`, payload);
  }
}
