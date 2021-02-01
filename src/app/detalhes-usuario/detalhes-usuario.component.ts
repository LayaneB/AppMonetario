import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario/usuario.interfaces';

@Component({
  selector: 'app-detalhes-usuario',
  templateUrl: './detalhes-usuario.component.html',
  styleUrls: ['./detalhes-usuario.component.css']
})
export class DetalhesUsuarioComponent implements OnInit {
  [x: string]: any;
usuario:Usuario;
loading:boolean;
onErrorLoading:boolean;
  constructor(

    private route:ActivatedRoute,
    private http:UsuarioService,
  ) { }

  ngOnInit() {
    this.getParametros();
  }
  getParametros(){
    const idUsuario = this.route.snapshot.paramMap.get('id');
    this.getUsuario(idUsuario);
  }
  getUsuario(idUsuario){
    this.loading=true;
    this.onErrorLoading=false;

    this.http.getUsuario(idUsuario)
    .subscribe(
     response =>this.onSucess(response),
     error => this.onError(error)
    
    
    )
  }
  onSucess(response: Usuario) {
    this.usuario=response;
    this.loading=false;
  }
  onError(error: any) {

  }
  
  onClick(UsuarioId) {
    return {
      path: `usuario/${UsuarioId}`, redirectTo: 'usuario', patchMath:'full'
    
    }
  }
  
  

  
}
