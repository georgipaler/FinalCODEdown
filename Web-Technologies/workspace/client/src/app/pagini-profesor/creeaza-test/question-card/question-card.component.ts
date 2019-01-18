import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { IIntrebare, IRaport, IRaspuns } from 'src/app/models';
import { resolve } from 'url';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {


  @Input() question: any;
  @Output('myQuestion') myQuestion: EventEmitter<any> = new EventEmitter();

  questionForm: FormGroup;
  trueFalseForm: FormGroup;
  answerForm: FormGroup;
  showAns: boolean = false;

  listaIntrebari: Array<any> = [];
  intrebariSubscription: Subscription;
  raspunsuriSubscription: Subscription;
  public questionListSubject: BehaviorSubject<any> = new BehaviorSubject([]);

  listaRaspunsuri: Array<any> = [];
  public answerListSubject: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {

    this.intrebariSubscription = this.http
      .get<IIntrebare[]>("https://final-codedown-georgipaler.c9users.io/get/intrebari").subscribe(intrebari => {
        console.log("intrebari card", intrebari);
        this.listaIntrebari = intrebari;
      });

    this.raspunsuriSubscription = this.http
      .get<IRaspuns[]>("https://final-codedown-georgipaler.c9users.io/get/raspunsuri").subscribe(raspunsuri => {
        console.log("raspunsuri card", raspunsuri);
        this.listaRaspunsuri = raspunsuri;
      });


    console.log("question card", this.question);
    this.initNameQuestionMultipleForm();
    this.initNameQuestionTrueFalseForm();
    this.initAnswerForm();
  }

  removeQuestion() {
    this.myQuestion.emit(this.question);
  }

  //save question and post
  saveQuestion() {
    this.addQuestion(this.newQuestionValue());
    this.showAns = true;
    console.log("save question", this.newQuestionValue())
  }

  saveAnswers() {
    this.showAns = false;
    Promise.all([
      this.createAnswer("a", this.answerForm.value.answerTextA),
      this.createAnswer("b", this.answerForm.value.answerTextB),
      this.createAnswer("c", this.answerForm.value.answerTextC),
      this.createAnswer("d", this.answerForm.value.answerTextD),
    ]).then((result) => {
      console.log("all done", result);
    });
  }

  saveTrueFalse() {
    this.showAns = false;

    if (this.trueFalseForm.value.answerField == "true") {
      Promise.all([
        this.createTrueFalse("True", true),
        this.createTrueFalse("False", false),
      ]).then((result) => {
        console.log("all done", result);
      });
    }

    else {
      Promise.all([
        this.createTrueFalse("True", false),
        this.createTrueFalse("False", true),
      ]).then((result) => {
        console.log("all done", result);
      });
    }

    console.log("save question");
  }

  //initializeaza form de intrebare ,ultiple
  private initNameQuestionMultipleForm() {
    this.questionForm = this.fb.group({
      questionTitle: ["", [Validators.required]]
    });
  }

  //initializeaza form de intrebare ,ultiple
  private initAnswerForm() {
    this.answerForm = this.fb.group({
      answerField: new FormControl('a'),
      answerTextA: ["", [Validators.required]],
      answerTextB: ["", [Validators.required]],
      answerTextC: ["",],
      answerTextD: ["",]
    });
  }

  //initializeaza form de intrebare True/False
  private initNameQuestionTrueFalseForm() {
    this.trueFalseForm = this.fb.group({
      answerField: new FormControl('true'),
    });
  }

  createTrueFalse(enunt: string, corect: boolean): Promise<any> {
    return new Promise((resolve, reject) => {

      let answer = {
        idIntrebare: this.question.id + 1,
        enunt: enunt,
        isCorect: corect
      }

      this.addAnswer(answer).subscribe(data => {
        this.listaRaspunsuri.push(_.cloneDeep(answer));
        this.answerListSubject.next(this.listaRaspunsuri);
        resolve("done");
        console.log("post", this.listaRaspunsuri)
      }, err => {
        resolve("fail obs");
      });
    })
  }

  //salveaza raspunsurile si post in baza de date
  createAnswer(posibleCorect: string, formAnswer: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!formAnswer) {
        resolve("no form");
        console.log("nu exista raspunsul", formAnswer);
        return;

      }

      let answer = {
        idIntrebare: this.question.id + 1,
        enunt: formAnswer,
        isCorect: false
      }

      if (this.answerForm.value.answerField == posibleCorect) {
        answer["isCorect"] = true;
      }
      console.log("save answer", answer);

      this.addAnswer(answer).subscribe(data => {
        this.listaRaspunsuri.push(_.cloneDeep(answer));
        this.answerListSubject.next(this.listaRaspunsuri);
        resolve("done");
        console.log("post", this.listaRaspunsuri)
      }, err => {
        resolve("fail obs");
      });
    })
  }


  //post question http req 
  addNewQuestionObs(question: any): Observable<any> {
    return this.http.post("https://final-codedown-georgipaler.c9users.io/post/intrebari", question);
  }

  addQuestion(question: any): void {
    console.log("lista intr", this.listaIntrebari)
    this.addNewQuestionObs(question).subscribe(data => {

      this.listaIntrebari.push(_.cloneDeep(question));
      this.questionListSubject.next(this.listaIntrebari);

      console.log("post", this.listaIntrebari)
    });
  }

  newQuestionValue(): any {
    let question = {
      enunt: this.questionForm.value.questionTitle,
      tipIntrebare: this.question.tipIntrebare,
      idTest: this.question.idTest,
    }

    console.log(question)
    return question;
  }


  //post answer http req 
  addNewAnswerObs(answer: any): Observable<any> {
    return this.http.post("https://final-codedown-georgipaler.c9users.io/post/raspunsuri", answer);
  }

  addAnswer(answer: any): Observable<any> {
    return this.addNewAnswerObs(answer);
  }

}
