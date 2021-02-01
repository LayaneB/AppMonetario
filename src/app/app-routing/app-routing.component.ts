import { Component, NgModule, OnInit } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { ContaComponent } from '../conta/conta.component';
import { HomeComponent } from '../home/home.component';
import { UsuarioComponent } from '../usuario/usuario.component';

const routes:Routes =[
  {path:'',
   component:HomeComponent
},{
  path:'usuario',
  component:UsuarioComponent
},
{
  path:'conta',
  component:ContaComponent
}

]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}