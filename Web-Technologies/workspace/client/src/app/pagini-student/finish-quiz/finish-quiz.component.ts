import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/services/utils/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish-quiz',
  templateUrl: './finish-quiz.component.html',
  styleUrls: ['./finish-quiz.component.css']
})
export class FinishQuizComponent implements OnInit {

  percentage: number;

  constructor(private utilService: UtilsService,
    private router: Router) { }

  ngOnInit() {

    this.percentage = Math.floor((this.utilService.scor / this.utilService.nrIntrebari) * 100);
    console.log("score finish", this.utilService.scor, this.utilService.nrIntrebari)

  }

  goToRapoarte(){
    this.router.navigate(['/studentPage', { outlets: {sidebar: ['rapoarteleMele'] } }]);
  }

  calculeazaPRocent() {
    return this.percentage >= 50;
  }
}
