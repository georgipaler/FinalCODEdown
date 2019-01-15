import { Component, OnInit } from '@angular/core';
import { IRaport, RAPOARTE } from 'src/app/models';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rapoarte-studenti',
  templateUrl: './rapoarte-studenti.component.html',
  styleUrls: ['./rapoarte-studenti.component.css']
})
export class RapoarteStudentiComponent implements OnInit {

  rapoarteSubscription : Subscription;
  
  constructor(private http: HttpClient) { }
  
  public listaRapoarte: Array<IRaport> ;

  ngOnInit() {

    this.rapoarteSubscription = this.http
    .get<IRaport[]>("https://final-codedown-georgipaler.c9users.io/get/rapoarte").subscribe(rapoarte => {
      console.log("rapoarte", rapoarte);
      this.listaRapoarte = rapoarte;
    });
  }
  
}
