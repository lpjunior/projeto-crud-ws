import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = 'http://10.151.206.199/ws/';
const httpOptions = {
    headers: new HttpHeaders(
        {'Content-type' : 'application/json;charset=utf-8'}
    )
}

@Injectable({
  providedIn: 'root'
})
export class ViagensService {

  constructor(private http: HttpClient) {}

  // lista as viagens 'select * from tb_viagens'
  getViagens() {
      return this.http.get<any>(`${API_URL}`, httpOptions);
  }
}
