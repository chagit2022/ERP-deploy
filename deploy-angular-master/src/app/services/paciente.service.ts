import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Paciente } from "../models/paciente";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  url = 'https://expresserp.herokuapp.com/api'

  constructor(private http:HttpClient) { }

  getPacientes(): Observable<any>{
    return this.http.get(`${this.url}/listar-pacientes`)
  }
  deletePacientes(id:string): Observable<any>{
    return this.http.delete(`${this.url}/borrar-paciente/${id}`)
  }
  postPaciente(paciente: Paciente): Observable<any>{
    return this.http.post(`${this.url}/crear-paciente`, paciente)
  }
  getPaciente(id:string): Observable<any>{
    return this.http.get(`${this.url}/listar-pacientes/${id}`)
  }
  putPaciente(id:string, paciente:Paciente):Observable<any>{
    return this.http.put(`${this.url}/actualizar-paciente/${id}`, paciente)
  }
}
