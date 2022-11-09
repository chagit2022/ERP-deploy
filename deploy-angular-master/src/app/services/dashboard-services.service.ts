import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardServicesService {

    url = 'https://expresserp.herokuapp.com/api'

  constructor(private http:HttpClient) {

    // getDashboard():Observable<any>{
    //     return this.http.get(`${this.url.}/dashboard`)
    // }
  }
}
