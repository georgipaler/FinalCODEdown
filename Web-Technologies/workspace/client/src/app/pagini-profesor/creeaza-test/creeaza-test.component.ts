import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IIntrebare, ITest, TESTE } from 'src/app/models';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-creeaza-test',
  templateUrl: './creeaza-test.component.html',
  styleUrls: ['./creeaza-test.component.css']
})
export class CreeazaTestComponent implements OnInit {

  public titleComponent= "Creeaza test nou";
  public questionsList: IIntrebare[] = [];
  public nrIntrebari: number;
  public listaTeste: Array<ITest>;

  testeSubscription: Subscription;
  intrebariSubscription: Subscription;
  public testListSubject:BehaviorSubject<any> = new BehaviorSubject([]) ;

  titleForm: FormGroup;
  constructor(private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {
    this.testeSubscription = this.http
    .get<ITest[]>("https://final-codedown-georgipaler.c9users.io/get/teste").subscribe(teste => {
      console.log("users", teste);
      this.listaTeste = teste;
    });

    this.intrebariSubscription = this.http
    .get<IIntrebare[]>("https://final-codedown-georgipaler.c9users.io/get/intrebari").subscribe(intrebari => {
      console.log("intrebari", intrebari);
      this.nrIntrebari = intrebari.length;
    })

    this.initNameTestForm();
  }

  private initNameTestForm() {
    this.titleForm = this.fb.group({
      testName: ["", [Validators.required]],
      time: ["", [Validators.required]],
      materie: ["", [Validators.required]],
      codTest: ["", [Validators.required]]
    });
}

assignName(){

  this.addTest(this.newTestValue());
  console.log("Form title post!", this.newTestValue());
}

createQuestion(type: string){
  let q = {
    id: this.nrIntrebari,
    idTest: this.listaTeste.length,
    enunt : "",
    tipIntrebare: type
  }

  console.log("q", q, this.questionsList)

  this.nrIntrebari ++;
  this.questionsList.push(q);
}


//delete local question
removeQuestion(intrebare: IIntrebare){
  const index = this.questionsList.findIndex(q => q.id === intrebare.id);
  this.questionsList.splice(index, 1);
}

  //post tests http req 
  addNewTestObs(test: any): Observable<any>{
    return this.http.post("https://final-codedown-georgipaler.c9users.io/post/teste", test);
  }

  addTest(raport: any): void {
    this.addNewTestObs(raport).subscribe(data => {
      this.listaTeste.push(_.cloneDeep(raport));
      this.testListSubject.next(this.listaTeste);

      console.log("post", this.listaTeste)
    });
  }

  newTestValue() {
    let test = {
      numeTest: this.titleForm.value.testName,
      timp: this.titleForm.value.time,
      materie: this.titleForm.value.materie,
      codTest: this.titleForm.value.codTest,
      activ: true,
      userId: 2
    }
    return test;
  }

ngOnDestry(){
  this.testeSubscription.unsubscribe();
  this,this.intrebariSubscription.unsubscribe();
}

}
