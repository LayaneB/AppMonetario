import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-conta',
  templateUrl: './detalhes-conta.component.html',
  styleUrls: ['./detalhes-conta.component.css']
})
export class DetalhesContaComponent implements OnInit {

  constructor(

    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getParametros();

  }

  getParametros(){
    const idConta = this.route.snapshot.paramMap.get('id');
    console.log("Estou mostrando um parametro"+idConta);
  }

}
