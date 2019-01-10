import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.css']
})
export class StartTestComponent implements OnInit {
  
  public code: any = "";
  codeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initCodeForm();

    console.log("valid", this.codeForm.valid)
  }

  initCodeForm(){
    this.codeForm = this.fb.group({
      codeValue: [""]
    });
  }



  startQuizz(){
    console.log("start quizz", this.code)
  }

  onKey(event: any) { 
    this.code = event.target.value ;
    console.log("code", this.code)
  }
}
