import { Component, OnInit } from '@angular/core';
import { IStudent, STUDENTI, IRaport, IUser, ITest } from 'src/app/models';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog-studenti',
  templateUrl: './catalog-studenti.component.html',
  styleUrls: ['./catalog-studenti.component.css']
})
export class CatalogStudentiComponent implements OnInit {

  listaUsers: Array<IUser>;
  usersSubscription: Subscription;

  listaTeste: Array<ITest>;
  testeSubscription: Subscription;

  listaRapoarte: Array<IRaport>;
  rapoarteSubscription: Subscription;


  constructor(private http: HttpClient,
    private route: ActivatedRoute) { }

  dateTest = ["12.01", "12.02", "12.03", "14.04"]
  ngOnInit() {

      //preluarea listei de teste
      this.testeSubscription = this.http
      .get<ITest[]>("https://final-codedown-georgipaler.c9users.io/get/teste").subscribe(teste => {
        console.log("teste", teste);
        this.listaTeste = teste;
      });

     //preluarea listei de rapoarte
     this.usersSubscription = this.http
     .get<IUser[]>("https://final-codedown-georgipaler.c9users.io/get/users").subscribe(users => {
       console.log("users", users);
       this.listaUsers = users.filter(user => user.grupa);
     });

     this.rapoarteSubscription = this.http
     .get<IRaport[]>("https://final-codedown-georgipaler.c9users.io/get/rapoarte").subscribe(rapoarte => {
       console.log("rapoarte", rapoarte);
       this.listaRapoarte = rapoarte;
     });


  }


  culoareNota(nota: number){
    if(nota >= 50){
      return true;
    }
    return false;
  }

  displayWithoutYear(data: string): string{
    return data.substring(0,5);
  }

  ngOnDestroy(){
    this.testeSubscription.unsubscribe();
    this.usersSubscription.unsubscribe();
    this.rapoarteSubscription.unsubscribe();
  }
}
