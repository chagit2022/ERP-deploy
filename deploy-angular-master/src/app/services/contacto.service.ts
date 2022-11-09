import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contactoModel';




@Injectable({
    providedIn: 'root'
})
export class ContactoService {

    url = 'https://expresserp.herokuapp.com/api'

    constructor(private http: HttpClient) { }

    getContacto(): Observable<any> {
        return this.http.get(`${this.url}/contacto`)
    }
    postContacto(contacto: Contacto): Observable<any> {
        return this.http.post(`${this.url}/crearContacto`, contacto)
    }
    deleteContacto(id:any): Observable<any> {
        return this.http.delete(`${this.url}/borrar-contacto/${id}`)
    }

}
