import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from './usuario.interfaces';
import{finalize, mergeMap, take} from 'rxjs/operators';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Array<Usuario>
page=1;
  loading:boolean;
  errorOnLoading:boolean;

  
  
   
 
  
  constructor(
    private http:UsuarioService
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
  }


}
