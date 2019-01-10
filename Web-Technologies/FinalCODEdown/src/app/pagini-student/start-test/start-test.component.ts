import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from 'src/services/utils/utils.service';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.css']
})
export class StartTestComponent implements OnInit {
  
  public code: any = "";
  codeForm: FormGroup;
  constructor(private fb: FormBuilder,
              private utilService: UtilsService)
   { }

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
    this.utilService.codeTest = this.code;
    console.log("start quizz", this.code)
  }

  onKey(event: any) { 
    this.code = event.target.value ;
    console.log("code", this.code)
  }
}
