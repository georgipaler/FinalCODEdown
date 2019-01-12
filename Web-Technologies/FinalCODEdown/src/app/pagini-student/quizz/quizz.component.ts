import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilsService } from 'src/services/utils/utils.service';
import { ITest, TESTE, IRaspuns, LISTARASPUNSURI, IIntrebare, LISTAINTREBARI } from 'src/app/models';
import { Router } from '@angular/router';

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
  listaTeste: Array<ITest> = TESTE;
  listaRaspunsuri: Array<IRaspuns> = LISTARASPUNSURI;
  listaIntrebari: Array<IIntrebare> = LISTAINTREBARI;

  constructor(private utilService: UtilsService,
        private router: Router) { }

  ngOnInit() {
    this.infoTest = this.utilService.testInfo;

    this.listaIntrebari = this.listaIntrebari.filter(intrebare =>
      intrebare.idTest == this.infoTest.id);

    this.nrIntrebari = this.listaIntrebari.length;  
    this.nextQuestion();
  }

  getAnswers(intrebare: IIntrebare) {
    return this.listaRaspunsuri.filter(raspuns => raspuns.idIntrebare == intrebare.id);
  }

  nextQuestion() {

    this.canGoNext = false;

    if(this.isCorect){
      this.scor ++;
    }
    this.intrebareCurenta = this.listaIntrebari[this.indexIntrebare];

    if (this.indexIntrebare < this.nrIntrebari) {
      this.indexIntrebare++;
    }
    else{
      this.utilService.scor = this.scor;
      this.utilService.nrIntrebari = this.nrIntrebari;
      this.router.navigate(['/studentPage', { outlets: {sidebar: ['finishQuiz'] } }]);
    }

    console.log("intrebare curenta", this.indexIntrebare);
    console.log("nr intrebari", this.nrIntrebari)
    console.log("scor", this.scor)
  }

  answer(raspuns: IRaspuns){
    this.isCorect = raspuns.raspunsCorect;
    this.canGoNext = true;
    console.log(raspuns)
  }

  progressBar(){
    return Math.floor(((this.indexIntrebare ) * 100 ) / this.nrIntrebari);
  }
  ngOnDestroy() {
    this.utilService.pauseTimer();
  }



}
