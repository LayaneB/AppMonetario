import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroContaComponent } from '../cadastro-conta/cadastro-conta.component';

import { CadastroUsuarioComponent } from '../cadastro-usuario/cadastro-usuario.component';
import { ContaComponent } from '../conta/conta.component';
import { DetalhesContaComponent } from '../detalhes-conta/detalhes-conta.component';
import { DetalhesUsuarioComponent } from '../detalhes-usuario/detalhes-usuario.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
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

},{
  path:'Login',
  component:LoginComponent
},{
  path:'cadastrar',
  component:CadastroUsuarioComponent
},{
  path:'cadastrar-conta',
  component:CadastroContaComponent
}

]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}