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
  constructor(
    private contas:ContaService
  ) { }

  ngOnInit() {
this.conta.push(this.contas.getTransacoes());
console.log(this.conta);
  }

}
