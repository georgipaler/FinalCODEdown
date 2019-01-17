import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITest, IRaport, IUser } from 'src/app/models';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  materiaCurenta: any;


  listaUseri: Array<IUser>;
  listaRapoarte: Array<IRaport>;
  rapoarteSubscription: Subscription;
  testeSubscription: Subscription;
  userSubscription: Subscription;

  uniqueObjects: string[] = [];
  objectsList: string[] = [];
  public listaTeste: Array<ITest>;
 

  constructor(private http: HttpClient,
    private router: Router,
   ) { }

  ngOnInit() {

 

    this.testeSubscription = this.http
    .get<ITest[]>("https://final-codedown-georgipaler.c9users.io/get/teste").subscribe(teste => {
      console.log("users", teste);
      this.listaTeste = teste;

      for (let test of this.listaTeste) {
        this.objectsList = this.objectsList.concat(test.materie);
      }

      this.uniqueObjects = Array.from(new Set(this.objectsList));
      console.log("materii", this.uniqueObjects)
    });

      //preluarea listei de rapoarte
      this.rapoarteSubscription = this.http
      .get<IRaport[]>("https://final-codedown-georgipaler.c9users.io/get/rapoarte").subscribe(rapoarte => {
        console.log("rapoarte", rapoarte);
        this.listaRapoarte = rapoarte;
      });

      //preluarea listei de rapoarte
      this.rapoarteSubscription = this.http
      .get<IUser[]>("https://final-codedown-georgipaler.c9users.io/get/users").subscribe(users => {
        console.log("users", users);
        this.listaUseri = users.filter(user => user.grupa);
      });
  }

  goToTeste(materie : string){
    this.router.navigate(['/homePage', { outlets: {sidebar: ['listaTeste', materie] }}]);
  }

  preluareGrupe(){
    
  }

  preiaUserii(materie: string): IUser[]{
    for(let raport of this.acceseazaRaport(materie)){
      var users = this.listaUseri.filter(user => user.id == raport.idUser);
    }
    console.log(users);
    return users;
  

  }

  //caut rapoartele  care au testul in functie de materie
  acceseazaRaport(materie: string): IRaport[]{
    for(let test of this.acceseazaTestul(materie)){
      var rapoarte = this.listaRapoarte.filter(raport => raport.idTest == test.id);
    }
    
    return rapoarte;
  }

//iau toate testele in functie de materie 
  acceseazaTestul(materie: string): ITest[]{
    const teste = this.listaTeste.filter(test => test.materie == materie );
    return teste;
  }

  ngOnDestroy(){
    this.testeSubscription.unsubscribe();
    this.rapoarteSubscription.unsubscribe();
  }

}