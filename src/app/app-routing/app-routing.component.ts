import { Component, NgModule, OnInit } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { ContaComponent } from '../conta/conta.component';
import { DetalhesContaComponent } from '../detalhes-conta/detalhes-conta.component';
import { DetalhesUsuarioComponent } from '../detalhes-usuario/detalhes-usuario.component';
import { HomeComponent } from '../home/home.component';
import { UsuarioComponent } from '../usuario/usuario.component';

const routes:Routes =[
  {path:'',
   component:HomeComponent
},{
  path:'usuario',
  component:UsuarioComponent
},{
  path:'usuario/:id',
  component:DetalhesUsuarioComponent

},
{
  path:'conta',
  component:ContaComponent
},{
  path:'conta/:id',
  component:DetalhesContaComponent

}

]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}