import { Component, NgModule, OnInit } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { ContaComponent } from '../conta/conta.component';

const routes:Routes =[
  {path:'',
   component:ContaComponent
}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{
  
}