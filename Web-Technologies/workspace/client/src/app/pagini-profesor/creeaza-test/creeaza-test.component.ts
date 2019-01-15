import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IIntrebare, ITest, TESTE } from 'src/app/models';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-creeaza-test',
  templateUrl: './creeaza-test.component.html',
  styleUrls: ['./creeaza-test.component.css']
})
export class CreeazaTestComponent implements OnInit {

  public titleComponent= "Creeaza test nou";
  public questionsList: IIntrebare[] = [];
  public listaTeste: Array<ITest>;

  testeSubscription: Subscription;

  titleForm: FormGroup;
  constructor(private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {
    this.testeSubscription = this.http
    .get<ITest[]>("https://final-codedown-georgipaler.c9users.io/get/teste").subscribe(teste => {
      console.log("users", teste);
      this.listaTeste = teste;
    })

    this.initNameTestForm();
  }

  private initNameTestForm() {
    this.titleForm = this.fb.group({
      testName: ["", [Validators.required]],
      time: ["", [Validators.required]],
      materie: ["", [Validators.required]]
    });
}

assignName(){
  console.log("Form title!", this.titleForm.value);
}

createQuestion(type: string){
  let q = {
    id: 20+this.questionsList.length,
    idTest: 1,
    enunt : "",
    tipIntrebare: type
  }
  this.questionsList.push(q);
}

removeQuestion(intrebare: IIntrebare){
  const index = this.questionsList.findIndex(q => q.id === intrebare.id);
  this.questionsList.splice(index, 1);
}

ngOnDestry(){
  this.testeSubscription.unsubscribe();
}

}
