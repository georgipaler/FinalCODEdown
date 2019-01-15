import { Component, OnInit } from '@angular/core';
import { ITest, TESTE, IRaport, RAPOARTE } from 'src/app/models';
import { text } from '@angular/core/src/render3';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rapoartele-mele',
  templateUrl: './rapoartele-mele.component.html',
  styleUrls: ['./rapoartele-mele.component.css']
})
export class RapoarteleMeleComponent implements OnInit {

  testeSubscription: Subscription;
  rapoarteSubscription: Subscription;

  listaTeste: Array<ITest> ;
  listaRaport: Array<IRaport>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    //preluarea listei de teste
    this.testeSubscription = this.http
    .get<ITest[]>("https://final-codedown-georgipaler.c9users.io/get/teste").subscribe(teste => {
      console.log("teste", teste);
      this.listaTeste = teste;
    });

    //preluarea listei de rapoarte
    this.rapoarteSubscription = this.http
    .get<IRaport[]>("https://final-codedown-georgipaler.c9users.io/get/rapoarte").subscribe(rapoarte => {
      console.log("rapoarte", rapoarte);
      this.listaRaport = rapoarte;
    });

  }

  //functia cauta in lista de teste, testul asociat raportului curent
  getTest(raport: IRaport): ITest{
   return  this.listaTeste ? this.listaTeste.filter(test => test.id === raport.idTest)[0] : null;
  }

  //verifica daca nota este sub sau peste 50%
  culoareNota(nota: number){
    if(nota >= 50){
      return true;
    }
    return false;
  }

  ngOnDestry(){
    this.testeSubscription.unsubscribe();
    this.rapoarteSubscription.unsubscribe();
  }

}
