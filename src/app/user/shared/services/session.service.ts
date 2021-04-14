import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  public set accessToken(token: string) {
    window.sessionStorage.setItem('token', token);
  }

  public get accessToken(): string {
    return window.sessionStorage.getItem('token') || '';
  }

}
