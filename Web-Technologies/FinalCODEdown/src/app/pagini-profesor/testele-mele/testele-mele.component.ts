import { Component, OnInit } from '@angular/core';
import {  ITest, TESTE } from 'src/app/models';

@Component({
  selector: 'app-testele-mele',
  templateUrl: './testele-mele.component.html',
  styleUrls: ['./testele-mele.component.css']
})
export class TesteleMeleComponent implements OnInit {

  constructor() { }

  public listaTeste: Array<ITest> = TESTE;


  ngOnInit() {
  }


  //functia de stergere a testelor din lista
  deleteTest(test: ITest){
    const index = this.listaTeste.findIndex(testFil => testFil.id === test.id);
    this.listaTeste.splice(index, 1);
  }

  downloadTest(test: ITest){
    console.log(test)
  }


}
