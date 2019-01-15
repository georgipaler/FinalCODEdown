import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from 'src/services/utils/utils.service';
import { Router } from '@angular/router';
import { ITest, TESTE } from 'src/app/models';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.css']
})
export class StartTestComponent implements OnInit {
  
  testInfo: ITest;
  listaTeste: Array<ITest> = TESTE;
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


  //functia care te baga in test daca codul introduc este cel corect
  startQuizz(){
    console.log("Test code", this.codeForm.value)

    this.utilService.testTime = this.testInfo.timp;
    this.utilService.startTimer();
    this.utilService.testInfo = this.testInfo;
    this.extrageTestulGasit(this.testInfo[0])
    this.verificaCod();
    this.router.navigate(['/studentPage', { outlets: {sidebar: ['yourQuizz'] } }]);
  }

  //verifica daca exista test cu codul introdus
  verificaCod(): boolean{
    this.code = this.codeForm.value.codeValue;
    this.testInfo= this.listaTeste.filter(el => el.codTest == this.code)[0];
    return this.testInfo ? true : false;
  }

  extrageTestulGasit(test: ITest){

  }
}
