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
   str:string;
  constructor(
    private contas:ContaService
  ) { }

  ngOnInit() {
<<<<<<< HEAD
this.contas.getUsuarios()
.subscribe(response =>{
  
  console.log(response);
})


=======
this.conta.push(this.contas.getTransacoes());
console.log(this.conta);
>>>>>>> 9d25ea3ec00efbf3544fdba6768ef5716a3d6cde
  }

}
