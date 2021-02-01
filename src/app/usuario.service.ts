import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Usuario } from './usuario/usuario.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient

  ) { }
  getUsuarios(page:number){
  /* const error = throwError('Error Normal');
   return timer(3000).pipe(mergeMap(()=>error)); */
   

    return this.http.get<Usuario[]>('https://my-json-server.typicode.com/KellYCarvalho/apiFake/usuario',{
      params:{
        _page: String(page),
      }
    });
  }
  getUsuario(id:number){
    /* const error = throwError('Error Normal');
     return timer(3000).pipe(mergeMap(()=>error)); */
     
  
      return this.http.get<Usuario>('https://my-json-server.typicode.com/KellYCarvalho/apiFake/usuario/'+id);

    }

    createUsuario(usuario:Usuario){
      return this.http.post<Usuario>('https://my-json-server.typicode.com/KellYCarvalho/apiFake/usuario',usuario);

    }
    updateUsuario(usuario:Usuario,id:string){
      return this.http.put<Usuario>('https://my-json-server.typicode.com/KellYCarvalho/apiFake/usuario/'+id,usuario);

    }

    deleteUsuario(id:string){
             return this.http.delete<Usuario>('https://my-json-server.typicode.com/KellYCarvalho/apiFake/usuario/'+id);

    }

}
