import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';
import { ContaService } from '../conta.service';
import { Conta } from '../conta/conta.interfaces';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.css']
})
export class CadastroContaComponent implements OnInit {
  loading:boolean;
  conta:Conta;
  constructor(
    private http:ContaService,
    private router:Router,
    private httpUsuarios:UsuarioService
  ) { }

  ngOnInit() {

  }

addConta(conta:Conta,idUsuario:string){
  this.loading=true;
  this.http.createConta(idUsuario, conta)
  .pipe(
    take(1),
    finalize(()=>{
      this.loading=false;
    })
  )
  .subscribe(
    response => this.onSuccess(response),
    error => this.onError(error)
  )
  
}

  onError(error: any){
  alert("Ocorreu Um erro")
  }
  onSuccess(response: Conta){
    this.conta=response;
    alert("Conta criada com sucesso");
  }

}
