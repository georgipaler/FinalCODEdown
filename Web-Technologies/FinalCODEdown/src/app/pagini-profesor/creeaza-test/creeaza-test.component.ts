import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IIntrebare } from 'src/app/models';
@Component({
  selector: 'app-creeaza-test',
  templateUrl: './creeaza-test.component.html',
  styleUrls: ['./creeaza-test.component.css']
})
export class CreeazaTestComponent implements OnInit {


  public questionsList: IIntrebare[] = [];

  titleForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initNameTestForm();
  }

  private initNameTestForm() {
    this.titleForm = this.fb.group({
      testName: ["", [Validators.required]]
    });
}

assignName(){
  console.log("Form title!")
}

createQuestion(type: string){
  let q = {
    id: 20,
    titlu : "",
    tip: type,
    varianteRaspuns :[]
  }
  this.questionsList.push(q);
}

deleteQuestion(intrebare: IIntrebare){
  const index = this.questionsList.findIndex(q => q.id === intrebare.id);
  this.questionsList.splice(index, 1);
}

}
