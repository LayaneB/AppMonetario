import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContaService } from '../conta.service';
import { Conta } from '../conta/conta.interfaces';

@Component({
  selector: 'app-detalhes-conta',
  templateUrl: './detalhes-conta.component.html',
  styleUrls: ['./detalhes-conta.component.css']
})
export class DetalhesContaComponent implements OnInit {
  conta:Conta;
  loading:boolean;
  onErrorLoading:boolean;

  constructor(

    private route:ActivatedRoute,
    private http:ContaService
  ) { }

  ngOnInit() {
    this.getParametros();

  }

  getParametros(){
    const idConta = this.route.snapshot.paramMap.get('id');
    this.getConta(idConta);
    console.log(idConta);
    
  }
  getConta(idConta: string) {
  this.http.getConta(idConta)
  .subscribe(
    response=>this.onSuccess(response[0]),
    error => this.onError(error)
  )
  }
  onError(error: any){
   //implementar
  }
  onSuccess(response: Conta) {
   this.conta=response;
  }

}
