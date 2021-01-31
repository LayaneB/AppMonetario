import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario/usuario.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient

  ) { }
  getUsuarios(){
    return this.http.get<Usuario[]>('http://localhost:3000/usuario');
  }


}
