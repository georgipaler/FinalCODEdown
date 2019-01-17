import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, ITest, IRaport } from 'src/app/models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-punctaje-teste',
  templateUrl: './punctaje-teste.component.html',
  styleUrls: ['./punctaje-teste.component.css']
})
export class PunctajeTesteComponent implements OnInit {


  sub:Subscription;
  raportCurent: string;

  listaUsers: Array<IUser>;
  usersSubscription: Subscription;

  listaTeste: Array<ITest>;
  testeSubscription: Subscription;

  listaRapoarte: Array<IRaport>;
  rapoarteSubscription: Subscription;
  
  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {

      //get route param
      this.sub = this.route.params.subscribe(params => {
        this.raportCurent = params['id']; // (+) converts string 'id' to a number
        console.log("materia curenta", this.raportCurent)
        // In a real app: dispatch action to load the details here.
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
           this.listaRapoarte = rapoarte.filter(rap => rap.idTest.toString() == this.raportCurent);
         });

  }


  getRaport(id: number){
    return this.listaRapoarte ? this.listaRapoarte.filter(raport => id ===raport.idUser)[0] : null;
  }

  culoareNota(nota: number){
    if(nota >= 50){
      return true;
    }
    return false;
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
    this.usersSubscription.unsubscribe();
    this.rapoarteSubscription.unsubscribe();

  }

}
