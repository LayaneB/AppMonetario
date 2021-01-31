import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from './usuario.interfaces';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Array<Usuario>

  
  
   
 
  
  constructor(
    private http:UsuarioService
    ) {

     }

  ngOnInit(){
    this.getUsuarios();

  }


 getUsuarios(){
  this.http.getUsuarios()
  .subscribe(response =>{
 
      this.usuario=response;
    
    
    console.log(this.usuario);
  })
 }
}
