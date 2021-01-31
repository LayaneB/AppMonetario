import { Component, NgModule, OnInit } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { ContaComponent } from '../conta/conta.component';
import { UsuarioComponent } from '../usuario/usuario.component';

const routes:Routes =[
  {path:'',
   component:ContaComponent
},{
  path:'usuario',
  component:UsuarioComponent
}

]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}