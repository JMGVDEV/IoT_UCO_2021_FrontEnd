import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  private urlBase: string = environment.urlBase;

  constructor(
      private http: HttpClient
  ) { }

  
  public createAppointment(payload: any): Observable<any>{
    return this.http.post(`${this.urlBase}/appointment/create-appointment`, payload )
  }

  public getAppointment(): Observable<any[]>{
    return this.http.get<any[]>(`${this.urlBase}/appointment/get-all-appointments`)
  }
}
