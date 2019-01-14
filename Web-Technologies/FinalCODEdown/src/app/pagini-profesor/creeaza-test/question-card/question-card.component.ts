import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {


  @Input() question : any;
  @Output('myQuestion') myQuestion: EventEmitter<any> = new EventEmitter();

  questionForm: FormGroup;
  trueFalseForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initNameQuestionMultipleForm();
    this.initNameQuestionTrueFalseForm();
  }

  removeQuestion() {
    this.myQuestion.emit(this.question);
}

saveQuestion(){
  console.log("save question", this.questionForm.value)
}

saveTrueFalse(){
  console.log("save question", this.trueFalseForm.value)
}


  private initNameQuestionMultipleForm() {
    this.questionForm = this.fb.group({
      questionTitle: ["", [Validators.required]],
      answerField: new FormControl('a'),
      answerTextA: ["", [Validators.required]],
      answerTextB: ["", [Validators.required]],
      answerTextC: ["", [Validators.required]],
      answerTextD: ["", [Validators.required]]
    });
}

 private initNameQuestionTrueFalseForm() {
    this.trueFalseForm = this.fb.group({
      questionTitle: ["", [Validators.required]],
       answerField: new FormControl('true'),
    });
}
}
