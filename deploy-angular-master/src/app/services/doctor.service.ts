import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctores } from '../models/dashboardDoctores';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {

  url = 'https://expresserp.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  getDoctores():Observable<any>{
    return this.http.get(`${this.url}/listar-doctores`)
  }

  postDoctor(Doctores: Doctores): Observable<any>{
    return this.http.post(`${this.url}/registrar-doctor`, Doctores)
  }

  deleteDoctor(id: String): Observable<any>{
    return this.http.delete(`${this.url}/borrar-doctor/${id}`)
  }

  getDoctor(id: String): Observable<any>{
    return this.http.get(`${this.url}/listar-doctores/${id}`)
  }

  putDoctor(id: String, Doctores: Doctores): Observable<any>{
    return this.http.put(`${this.url}/actualizar-doctor/${id}`, Doctores)
  }
}
