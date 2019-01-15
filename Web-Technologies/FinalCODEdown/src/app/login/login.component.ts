import { Component, OnInit } from '@angular/core';
import { LoginHelperService } from 'src/services/login/login-helper.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  
  constructor(private loginHelper: LoginHelperService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initLoginForm();
    console.log("is teacher", this.loginHelper.isTeacher)
  }


  private initLoginForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
}


onSubmit(){
  console.log("on submit", this.loginForm.value.email)
  let email = this.loginForm.value.email;
  email=email.split("@");

  console.log(email[1].substring(0,4));
  if(email[1].substring(0,4) == "stud"){
    this.router.navigate(['/studentPage', {outlets: {sidebar: ['startTest']}}]);
    this.loginHelper.isLogin = true;
  }
  else{
    console.log()
    if(email[1].substring(0, 2) == "ie")
    this.router.navigate(['/homePage', {outlets: {sidebar: ['testeProf']}}]);
    this.loginHelper.isLogin =true;
  }


}
}
