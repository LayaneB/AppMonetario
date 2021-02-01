import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conta } from './conta/conta.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
 httpOptions={
   headers: new HttpHeaders({
     Autorization:'token de autorização'
   })
 }
  constructor(
    private http: HttpClient
    ) { }

    getContas(page:number){
      return this.http.get<Conta[]>('https://my-json-server.typicode.com/KellYCarvalho/apiFake/contas',{
      params:{
        _page: String(page),
      }
    });
    }

    getConta(id:string){
      return this.http.get<Conta>('https://my-json-server.typicode.com/KellYCarvalho/apiFake/contas/')
    }

   
}
