import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse, LoginBody} from '../interfaces/interfaces';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlBase: string = environment.urlBase


  constructor( private http: HttpClient) { }


  login(loginBody: LoginBody){

    const url = `${this.urlBase}/auth/login`;  
  

    return this.http.post<AuthResponse>(url, loginBody)
      .pipe(
        tap(resp => {
          console.log(resp)
          if ( resp ){
            localStorage.setItem('token', resp.access_token!);
            console.log('log')
          }
        }),
        map( resp => true),
        catchError( err => of(false))
    )
    //return this.http.post<AuthResponse>('/auth/login', body)
  }

  public validarToken(): Observable<Profile> {
    const dir = `${this.urlBase}/auth/profile`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}` || '')
    return this.http.get<Profile>( dir, {
      headers
    } );
  }


}
