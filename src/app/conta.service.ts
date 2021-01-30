import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
//contas =[];
  constructor(
    private http: HttpClient
    ) { }

    getTransacoes(){
      return this.http.get('./db.json');
    }
}
