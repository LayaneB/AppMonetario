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

   str:string;
  constructor(
    private contas:ContaService
  ) { }

  ngOnInit() {
    this.getUsuarios();
 }

 getUsuarios(){
  this.contas.getUsuarios()
  .subscribe(response =>{
    this.conta.push(response);
    console.log(this.conta);
  })
 }

}
