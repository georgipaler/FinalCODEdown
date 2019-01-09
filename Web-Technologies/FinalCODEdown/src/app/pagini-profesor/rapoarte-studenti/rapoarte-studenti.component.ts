import { Component, OnInit } from '@angular/core';
import { IRaport, RAPOARTE } from 'src/app/models';
@Component({
  selector: 'app-rapoarte-studenti',
  templateUrl: './rapoarte-studenti.component.html',
  styleUrls: ['./rapoarte-studenti.component.css']
})
export class RapoarteStudentiComponent implements OnInit {

  constructor() { }

  public listaRapoarte: Array<IRaport> = RAPOARTE;

  ngOnInit() {
  }
  
}
