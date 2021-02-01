import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Usuario } from './usuario/usuario.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient

  ) { }
  getUsuarios(){
    //return throwError(new Error('Erro normal'));

    return this.http.get<Usuario[]>('http://localhost:3000/usuario');
  }


}
