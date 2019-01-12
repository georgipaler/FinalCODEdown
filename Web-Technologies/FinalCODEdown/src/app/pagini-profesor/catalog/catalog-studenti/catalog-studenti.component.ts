import { Component, OnInit } from '@angular/core';
import { IStudent, STUDENTI } from 'src/app/models';

@Component({
  selector: 'app-catalog-studenti',
  templateUrl: './catalog-studenti.component.html',
  styleUrls: ['./catalog-studenti.component.css']
})
export class CatalogStudentiComponent implements OnInit {

  constructor() { }

  listaStudenti : Array<IStudent> = STUDENTI;
  dateTest = ["12.01", "12.02", "12.03", "14.04"]
  ngOnInit() {
  }


  culoareNota(nota: number){
    if(nota >= 50){
      return true;
    }
    return false;
  }
}
