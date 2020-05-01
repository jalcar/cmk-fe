import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CmkService {

  url = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) {
    // console.log('Servicio UP');
  }

  getContenidos() {
    return this.http.get(this.url);
  }
}
