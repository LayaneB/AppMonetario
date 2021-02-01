import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { UsuarioService } from '../usuario.service';
import { Usuario } from './usuario.interfaces';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Array<Usuario>
  usuarios=[];
  page=1;
  loading:boolean;
  errorOnLoading:boolean;

  
  
   
 
  
  constructor(
    private http:UsuarioService,
    private router:Router,
    private location:Location
    ) {

     }

  ngOnInit(){
    this.getUsuarios();

  }
  prev(){
    this.page=this.page-1;
    this.getUsuarios();

  }
  next(){
    this.page=this.page+1;
    this.getUsuarios();


  }

 getUsuarios(){


    this.loading=true;
    this.errorOnLoading=false;
    

   
  
  this.http.getUsuarios(this.page)
  .pipe(
    take(1),
    finalize(()=>{
      this.loading=false;
    

    })
  )
  .subscribe(
    response => this.onSuccess(response),
    error=>this.onError(error),
    );
 }
  onError(error:any) {
    
      this.errorOnLoading=true;
      console.log(error);
  
        
  }
  onSuccess(response:Usuario[]) {
 
    this.usuario=response;
    this.retornarLista(this.usuario);
  }

  goToDetails(idUsuario:string){

    this.router.navigate([`usuario/${idUsuario}`]);
  

  }
  deletar(id){
    this.http.deleteUsuario(id)
    .subscribe(
      response => this.onSuccessDelete(id),
      error => this.OnError(error),
    )
  }
  onSuccessDelete(id){
    alert("apagado com sucesso!: Mas a API é fake :( "+id);
  }
  OnError(error: any){
    console.log(error);
  }

  retornarLista(usuario){
this.usuarios.push(this.usuario);
console.log(this.usuarios);
  }
}
