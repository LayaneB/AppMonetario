import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario/usuario.interfaces';

@Component({
  selector: 'app-detalhes-usuario',
  templateUrl: './detalhes-usuario.component.html',
  styleUrls: ['./detalhes-usuario.component.css']
})
export class DetalhesUsuarioComponent implements OnInit {
usuario:Array<Usuario>
  constructor(

    private route:ActivatedRoute,
    private http:UsuarioService
  ) { }

  ngOnInit() {
    this.getParametros();
  }
  getParametros(){
    const idUsuario = this.route.snapshot.paramMap.get('id');
    this.getUsuario(idUsuario);
  }
  getUsuario(idUsuario){

    this.http.getUsuario(idUsuario)
    .subscribe(response=>{
this.usuario=response;
console.log(this.usuario);
    })
    

  }
}
