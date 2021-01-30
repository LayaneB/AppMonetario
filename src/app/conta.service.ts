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
      return this.http.get('http://localhost:3000/usuario');
    }

    getUsuario(id){
      return this.http.get(' http://localhost:3000/usuario/'+id);

    }
    getContas(){
      return this.http.get(' http://localhost:3000/contas');

    }
    getConta(id){
      return this.http.get(' http://localhost:3000/contas/'+id);

    }

    createUsuario(id:string, usuario){
      return this.http.post(' http://localhost:3000/contas',usuario);

    }

    updateUsuario(id:string,usuario){
      return this.http.put(' http://localhost:3000/contas/'+id,usuario);


    }
    deleteUsuario(id){
      return this.http.get(' http://localhost:3000/usuario/'+id);

    }

}
