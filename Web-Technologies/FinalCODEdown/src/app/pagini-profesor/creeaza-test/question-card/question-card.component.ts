import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {


  @Input() question : any;
  @Output('myQuestion') myQuestion: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  removeQuestion() {
    this.myQuestion.emit(this.question);
}

}
