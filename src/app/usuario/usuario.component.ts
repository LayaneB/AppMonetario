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

  loading:boolean;
  errorOnLoading:boolean;

  
  
   
 
  
  constructor(
    private http:UsuarioService
    ) {

     }

  ngOnInit(){
    this.getUsuarios();

  }


 getUsuarios(){


    this.loading=true;
    this.errorOnLoading=false;

   
  
  this.http.getUsuarios()
  .subscribe(response =>{
 
      this.usuario=response;
      this.loading=false
  },error=>{
this.errorOnLoading=true;
this.loading=false;
  })
 }
}
