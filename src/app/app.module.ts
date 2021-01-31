import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContaComponent } from './conta/conta.component';
import{AppRoutingModule} from './app-routing/app-routing.component';
import { FormsModule } from '@angular/forms';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    ContaComponent,
    CadastroUsuarioComponent,
    UsuarioComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
