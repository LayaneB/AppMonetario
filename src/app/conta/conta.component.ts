import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { finalize, take } from 'rxjs/operators';
import { ContaService } from '../conta.service';
import { Conta } from './conta.interfaces';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

   conta :Array<Conta>
   page=1;
   loading:boolean;
   errorOnLoading:boolean;
   

 
  constructor(
    private http:ContaService,
    private route:Router
  ) { }

  ngOnInit() {
    this.getConta();
 }
 prev(){
  this.page=this.page-1;
  this.getConta();

}
next(){
  this.page=this.page+1;
  this.getConta();


}

 getConta(){
   this.loading=true;
   this.errorOnLoading=false;

   this.http.getContas(this.page)
   .pipe(
     take(1),
     finalize(()=>{
       this.loading=false;
     })
   )
   .subscribe(
     response=>this.onSuccess(response),
     error=>this.onError(error(),
     )
     
     
   )
 }
 onError(error:any) {
    
  this.errorOnLoading=true;
  console.log(error);

    
}
onSuccess(response:Conta[]) {
this.conta=response;
console.log(response[0].id);

}

goToDetails(idConta:string){
  this.route.navigate([`conta/${idConta}`])
}
deletar(id){
  console.log(id);
this.http.deleteConta(id)
  .subscribe(
    response => this.onSuccessDelete(id),
    error => this.onError(error),
  )
}

onSuccessDelete(id){
  alert("apagado com sucesso! Mas a API é fake :(  ");
}
 
}
