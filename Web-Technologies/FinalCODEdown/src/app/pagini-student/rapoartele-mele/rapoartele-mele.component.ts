import { Component, OnInit } from '@angular/core';
import { ITest, TESTE, IRaport, RAPOARTE } from 'src/app/models';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-rapoartele-mele',
  templateUrl: './rapoartele-mele.component.html',
  styleUrls: ['./rapoartele-mele.component.css']
})
export class RapoarteleMeleComponent implements OnInit {


  listaTeste: Array<ITest> = TESTE;
  listaRaport: Array<IRaport> = RAPOARTE;
  constructor() { }

  ngOnInit() {
  }

  getTest(raport: IRaport): ITest{
   return  this.listaTeste.filter(test => test.id === raport.idTest)[0];
  }

}
