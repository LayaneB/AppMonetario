import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-usuario',
  templateUrl: './detalhes-usuario.component.html',
  styleUrls: ['./detalhes-usuario.component.css']
})
export class DetalhesUsuarioComponent implements OnInit {

  constructor(

    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getParametros();
  }
  getParametros(){
    const idUsuario = this.route.snapshot.paramMap.get('id');
    console.log("Estou mostrando um parametro: "+idUsuario);
  }

}
