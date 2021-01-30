import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

   conta =[];
   usuario=[];
   usuarioCriado=[

   ];

   str:string;
  constructor(
    private http:ContaService
  ) { }

  ngOnInit() {
    this.getUsuarios();
 }

 getUsuarios(){
  this.http.getUsuarios()
  .subscribe(response =>{
    this.usuario.push(response);
    console.log(this.usuario);
  })
 }


 
}
