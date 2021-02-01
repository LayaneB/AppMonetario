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
   

    return this.http.get<Usuario[]>('https://my-json-server.typicode.com/KellYCarvalho/apiFake/usuario');
  }


}
