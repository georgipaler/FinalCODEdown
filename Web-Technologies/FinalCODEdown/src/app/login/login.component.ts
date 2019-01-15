import { Component, OnInit } from '@angular/core';
import { LoginHelperService } from 'src/services/login/login-helper.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  users: Array<IUser>;
  
  constructor(private loginHelper: LoginHelperService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    
     this.users = this.http
            .get<IUser[]>("https://final-codedown-georgipaler.c9users.io/get/users")
    
    console.log("users", this.users)
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
