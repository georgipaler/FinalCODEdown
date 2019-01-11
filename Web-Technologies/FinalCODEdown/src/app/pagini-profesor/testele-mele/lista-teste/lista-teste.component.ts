import { Component, OnInit } from '@angular/core';
import * as models from 'src/app/models';
import { StartTestComponent } from 'src/app/pagini-student/start-test/start-test.component';
@Component({
  selector: 'app-lista-teste',
  templateUrl: './lista-teste.component.html',
  styleUrls: ['./lista-teste.component.css']
})
export class ListaTesteComponent implements OnInit {

  constructor() { }

  public listaTeste: Array<models.ITest> = models.TESTE;

  ngOnInit() {
  }
 //functia de stergere a testelor din lista
 deleteTest(test: models.ITest){
  const index = this.listaTeste.findIndex(testFil => testFil.id === test.id);
  this.listaTeste.splice(index, 1);
 }
  StartTestComponent(test:models.ITest){

}


downloadTest(test: models.ITest){
  console.log(test)
}
}
