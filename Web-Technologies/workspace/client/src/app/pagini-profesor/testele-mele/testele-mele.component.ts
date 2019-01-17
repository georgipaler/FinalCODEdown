import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITest } from 'src/app/models';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-testele-mele',
  templateUrl: './testele-mele.component.html',
  styleUrls: ['./testele-mele.component.css']
})
export class TesteleMeleComponent implements OnInit {


  materiaCurenta: any;

  testeSubscription: Subscription;
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
  }

  goToTeste(materie : string){
    this.router.navigate(['/homePage', { outlets: {sidebar: ['listaTeste', materie] }}]);
  }

  ngOnDestroy(){
    this.testeSubscription.unsubscribe();
  }
 


}
