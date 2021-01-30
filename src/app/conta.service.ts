import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(
    private http: HttpClient
    ) { }

    getUsuarios(){
      return this.http.get(' http://localhost:3000/usuario');
    }
    getConta(){
      return this.http.get(' http://localhost:3000/contas');

    }
}
