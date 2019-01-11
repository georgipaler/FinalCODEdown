import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilsService } from 'src/services/utils/utils.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit, OnDestroy {

  constructor(private utilService: UtilsService) { }

  ngOnInit() {
    console.log("Quiz code", this.utilService.codeTest);

  }


  ngOnDestroy(){
    this.utilService.pauseTimer();
  }

 

}
