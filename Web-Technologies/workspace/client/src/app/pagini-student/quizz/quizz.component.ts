import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilsService } from 'src/services/utils/utils.service';
import { ITest, TESTE, IRaspuns, LISTARASPUNSURI, IIntrebare, LISTAINTREBARI, IRaport } from 'src/app/models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit, OnDestroy {


  indexIntrebare: number = 0;
  nrIntrebari: number;
  scor: number = 0;
  isCorect: boolean = false;
  canGoNext: boolean = false;

  infoTest: ITest;
  intrebareCurenta: IIntrebare;
  listaTeste: Array<ITest>;
  listaRaspunsuri: Array<IRaspuns>;
  listaIntrebari: Array<IIntrebare>;

  testeSubscription: Subscription;
  intrebariSubscription: Subscription;
  raspunsuriSubscription: Subscription;

  constructor(private utilService: UtilsService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {

    this.infoTest = this.utilService.testInfo;

    this.testeSubscription = this.http
      .get<ITest[]>("https://final-codedown-georgipaler.c9users.io/get/teste").subscribe(teste => {
        console.log("teste", teste);
        this.listaTeste = teste;
      });

    this.intrebariSubscription = this.http
      .get<IIntrebare[]>("https://final-codedown-georgipaler.c9users.io/get/intrebari").subscribe(intrebari => {
        console.log("intrebari", intrebari);
        this.listaIntrebari = intrebari;
        this.listaIntrebari = this.listaIntrebari.filter(intrebare =>
          intrebare.idTest == this.infoTest.id);
        this.nrIntrebari = this.listaIntrebari.length;

        this.nextQuestion();

      });

    this.raspunsuriSubscription = this.http
      .get<IRaspuns[]>("https://final-codedown-georgipaler.c9users.io/get/raspunsuri").subscribe(raspunsuri => {
        console.log("raspunsuri", raspunsuri);
        this.listaRaspunsuri = raspunsuri;
      });



  }

  getAnswers(intrebare: IIntrebare) {
    return this.listaRaspunsuri ? this.listaRaspunsuri.filter(raspuns => raspuns.idIntrebare == intrebare.id) : null;
  }

  nextQuestion() {

    this.canGoNext = false;

    if (this.isCorect) {
      this.scor++;
    }
    this.intrebareCurenta = this.listaIntrebari[this.indexIntrebare];

    if (this.indexIntrebare < this.nrIntrebari) {
      this.indexIntrebare++;
    }
    else {
      this.utilService.scor = this.scor;
      this.utilService.nrIntrebari = this.nrIntrebari;
      let percentage = Math.floor((this.scor / this.nrIntrebari) * 100);
      let raport = {
        "id": this.nrIntrebari,
        "idTest": this.infoTest.id,
        "dataRaport": "17.01.2019",
        "punctaj": percentage,
      }

      this.http.post<IRaport>("https://final-codedown-georgipaler.c9users.io/post/rapoarte", raport);
      this.router.navigate(['/studentPage', { outlets: { sidebar: ['finishQuiz'] } }]);
    }

    console.log("intrebare curenta", this.indexIntrebare);
    console.log("nr intrebari", this.nrIntrebari)
    console.log("scor", this.scor)
  }

  //valideaza raspuns
  answer(raspuns: IRaspuns) {
    this.isCorect = raspuns.isCorect;
    this.canGoNext = true;
    console.log(raspuns)
  }

  //calculeaza pe unde se afla utilizatorul din totalul de intrebari
  progressBar() {
    return Math.floor(((this.indexIntrebare) * 100) / this.nrIntrebari);
  }

  ngOnDestroy() {
    this.utilService.pauseTimer();

    this.intrebariSubscription.unsubscribe();
    this.testeSubscription.unsubscribe();
  }



}
