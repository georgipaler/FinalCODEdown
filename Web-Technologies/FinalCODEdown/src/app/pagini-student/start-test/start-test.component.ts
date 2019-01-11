import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from 'src/services/utils/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.css']
})
export class StartTestComponent implements OnInit {
  
  public code: any = "";
  codeForm: FormGroup;
  constructor(private fb: FormBuilder,
              private utilService: UtilsService,
              private router: Router)
   { }

  ngOnInit() {
    this.initCodeForm();

    console.log("valid", this.codeForm.valid)
  }

  initCodeForm(){
    this.codeForm = this.fb.group({
      codeValue: ["", Validators.required]
    });
  }

  startQuizz(){
    this.utilService.codeTest = this.code;
    this.utilService.startTimer();
    this.router.navigate(['/studentPage', { outlets: {sidebar: ['yourQuizz'] } }]);
  }

  onKey(event: any) { 
    this.code = event.target.value ;
  }
}
