import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment';
import { environment } from '../../../../environments/environment.prod';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

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
    return this.http.get<any[]>(`${this.urlBase}/appointment/get-all-appointments`).pipe(map((response: any) => {
      for (let item of response) {
        moment.locale('es');
        item.date = moment(item.date).format('LLL');
      }
      return response;
    }))
  }

  public deleteAppointment(id: String): Observable<any>{
    return this.http.delete(`${this.urlBase}/appointment/delete-appointment/${id}`);
  }

  public acceptAppointment(idCita: String): Observable<any>{
    return this.http.put(`${this.urlBase}/appointment/accept-appointment/${idCita}`, idCita);
  }

  public rejectAppointment(idCita: String): Observable<any>{
    return this.http.put(`${this.urlBase}/appointment/reject-appointment/${idCita}`, idCita);
  }

  public completeAppointment(idCita: String): Observable<any>{
    return this.http.put(`${this.urlBase}/appointment/complete-appointment/${idCita}`, idCita);
  }
}
