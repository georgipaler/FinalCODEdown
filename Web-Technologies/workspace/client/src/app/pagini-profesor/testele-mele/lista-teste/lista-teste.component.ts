import { Component, OnInit } from '@angular/core';
import { ITest, TESTE } from 'src/app/models';
import { StartTestComponent } from 'src/app/pagini-student/start-test/start-test.component';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-lista-teste',
  templateUrl: './lista-teste.component.html',
  styleUrls: ['./lista-teste.component.css']
})
export class ListaTesteComponent implements OnInit {

  testeSubscription: Subscription;
  constructor(private http: HttpClient) { }

  public listaTeste: Array<ITest>;

  ngOnInit() {

    this.testeSubscription = this.http
    .get<ITest[]>("https://final-codedown-georgipaler.c9users.io/get/teste").subscribe(teste => {
      console.log("users", teste);
      this.listaTeste = teste;
    });
  }
  
 //functia de stergere a testelor din lista
 deleteTest(test: ITest){
  const index = this.listaTeste.findIndex(testFil => testFil.id === test.id);
  this.listaTeste.splice(index, 1);
 }
  
  startTest(test: ITest){
     console.log("start test", test )
     test.activ  = !test.activ;
     
}


downloadTest(test: ITest){
  console.log(test)
}
}
