import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { finalize, take } from 'rxjs/operators';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario/usuario.interfaces';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styles: [
  ]
})
export class CadastroUsuarioComponent implements OnInit {
loading:boolean;
novoUsuario:Usuario;
  constructor(
    private http:UsuarioService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  addUsuario(usuario:Usuario){
    this.http.createUsuario(usuario)
    .pipe(
      take(1),
      finalize(()=>{
this.loading=false;
      })

    )
    .subscribe(
      response => this.OnSuccess(response),
      error => this.OnError(error),
    );

  }
  OnError(error: any){
    console.log(error);
  }
  OnSuccess(response: Usuario){
    this.novoUsuario=response;
    console.log('Tudo certo!',this.novoUsuario);
    this.router.navigate(['usuario']);
  }
onSuccessDelete(id){
  console.log("apagado com sucesso!: "+id);
}

}
