import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenDoorDto } from 'src/app/protected/open-door/shared/model/open-door-manager';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OpenDoorUserService {
  private urlBase: string = environment.urlBase;

  constructor(private http: HttpClient) { }

  

  public validateUser(formData: FormData): Observable<any>{
    return this.http.post(`${this.urlBase}/validate-face-image`, formData);
  }

  public closeBox(openDoorDto: OpenDoorDto): Observable<any> {
    return this.http.post(`${this.urlBase}/close-box`, openDoorDto);
  }

  public openBox(openDoorDto: OpenDoorDto): Observable<any> {
    return this.http.post(`${this.urlBase}/open-box`, openDoorDto);
  }
}
