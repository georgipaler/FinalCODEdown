import { Component, OnInit } from '@angular/core';
import { IRaport, RAPOARTE, ITest } from 'src/app/models';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rapoarte-studenti',
  templateUrl: './rapoarte-studenti.component.html',
  styleUrls: ['./rapoarte-studenti.component.css']
})
export class RapoarteStudentiComponent implements OnInit {

  rapoarteSubscription : Subscription;
  public listaRapoarte: Array<IRaport> ;

  testeSubscription: Subscription;
  listaTeste : Array<ITest>;
  
  constructor(private http: HttpClient,
    private router: Router) { }
  
  

  ngOnInit() {

    this.rapoarteSubscription = this.http
    .get<IRaport[]>("https://final-codedown-georgipaler.c9users.io/get/rapoarte").subscribe(rapoarte => {
      console.log("rapoarte", rapoarte);
      this.listaRapoarte = rapoarte;
    });

    this.testeSubscription = this.http
    .get<ITest[]>("https://final-codedown-georgipaler.c9users.io/get/teste").subscribe(teste => {
      console.log("teste", teste);
      this.listaTeste = teste;
    });
  }

   //functia cauta in lista de teste, testul asociat raportului curent
   getTest(raport: IRaport): ITest{
    return  this.listaTeste ? this.listaTeste.filter(test => test.id === raport.idTest)[0] : null;
   }
 
   goToPunctaje(id : number){
    this.router.navigate(['/homePage', { outlets: {sidebar: ['punctajeTeste', id] } }]);
  }

  ngOnDestroy(){
    this.rapoarteSubscription.unsubscribe();
    this.testeSubscription.unsubscribe();
  }
  
}


