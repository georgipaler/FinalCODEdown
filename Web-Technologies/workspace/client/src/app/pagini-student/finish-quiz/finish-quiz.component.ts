import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/services/utils/utils.service';
import { Router } from '@angular/router';
import { IRaport } from 'src/app/models';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-finish-quiz',
  templateUrl: './finish-quiz.component.html',
  styleUrls: ['./finish-quiz.component.css']
})
export class FinishQuizComponent implements OnInit {

  percentage: number;

  listaRaport: Array<any>;
  rapoarteSubscription: Subscription;
  public raportListSubject:BehaviorSubject<any> = new BehaviorSubject([]) ;

  constructor(private utilService: UtilsService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    //preluarea listei de rapoarte
    this.rapoarteSubscription = this.http
      .get<IRaport[]>("https://final-codedown-georgipaler.c9users.io/get/rapoarte").subscribe(rapoarte => {
        console.log("rapoarte", rapoarte);
        this.listaRaport = rapoarte;
      });

    this.percentage = Math.floor((this.utilService.scor / this.utilService.nrIntrebari) * 100);
    console.log("score finish", this.utilService.scor, this.utilService.nrIntrebari)

  }

  goToRapoarte() {
    this.addRaport(this.newRaportValue());
    this.router.navigate(['/studentPage', { outlets: { sidebar: ['rapoarteleMele'] } }]);
  }

  //post http req
  addNewRaportObs(raport: any): Observable<any>{
    return this.http.post("https://final-codedown-georgipaler.c9users.io/post/rapoarte", raport);
  }

  addRaport(raport: any): void {
    this.addNewRaportObs(raport).subscribe(data => {
      this.listaRaport.push(_.cloneDeep(raport));
      this.raportListSubject.next(this.listaRaport);

      console.log("post", this.listaRaport)
    });
  }

  newRaportValue() {
    let raport = {
      idTest: this.utilService.testInfo.id,
      dataRaport: "17.01.2019",
      punctaj: this.percentage,
      idUser: 1
    };
    return raport;
  }

  //calculeaza daca punctajul depaseste sau nu 50 % pentru culoare
  calculeazaPRocent() {
    return this.percentage >= 50;
  }
}
