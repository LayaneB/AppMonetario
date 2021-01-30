import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContaComponent } from './conta/conta.component';
import{AppRoutingModule} from './app-routing/app-routing.component';
@NgModule({
  declarations: [
    AppComponent,
    ContaComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
