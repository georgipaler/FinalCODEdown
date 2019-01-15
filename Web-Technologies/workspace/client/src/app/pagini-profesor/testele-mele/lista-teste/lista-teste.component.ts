import { Component, OnInit } from '@angular/core';
import { ITest, TESTE } from 'src/app/models';
import { StartTestComponent } from 'src/app/pagini-student/start-test/start-test.component';
@Component({
  selector: 'app-lista-teste',
  templateUrl: './lista-teste.component.html',
  styleUrls: ['./lista-teste.component.css']
})
export class ListaTesteComponent implements OnInit {

  constructor() { }

  public listaTeste: Array<ITest> = TESTE;

  ngOnInit() {
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
