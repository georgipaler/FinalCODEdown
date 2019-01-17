import { Component, OnInit } from '@angular/core';
import { LoginHelperService } from 'src/services/login/login-helper.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  users: Array<IUser>;

  parolaIncorecta: boolean =false;

  //subscriptions
  userSubscription: Subscription
  
  constructor(private loginHelper: LoginHelperService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    
   this.userSubscription =  this.http
            .get<IUser[]>("https://final-codedown-georgipaler.c9users.io/get/users").subscribe(users => {
              console.log("users", users);
              this.users = users;
            });
    
    console.log("users", this.users);
    this.initLoginForm();
  }


  private initLoginForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
}


onSubmit(){
  console.log("on submit", this.loginForm.value.email)
  // let email = this.loginForm.value.email;
  // email=email.split("@");

  // console.log(email[1].substring(0,4));
  // if(email[1].substring(0,4) == "stud"){
  //   this.router.navigate(['/studentPage', {outlets: {sidebar: ['startTest']}}]);
  //   this.loginHelper.isLogin = true;
  // }
  // else{
  //   console.log()
  //   if(email[1].substring(0, 2) == "ie")
  //   this.router.navigate(['/homePage', {outlets: {sidebar: ['testeProf']}}]);
  //   this.loginHelper.isLogin =true;
  // }

  let username = this.loginForm.value.email;
  let userFiltered = this.users.filter(user => user.username == username && user.password == this.loginForm.value.password);

  if(userFiltered.length){
    if(userFiltered[0].profil == "stud"){
      this.loginHelper.user = userFiltered[0];
      this.loginHelper.isLogin = true;
      this.loginHelper.profil = "stud";
      
      this.router.navigate(['/studentPage', {outlets: {sidebar: ['startTest']}}]);
    }
    else{
      if(userFiltered[0].profil == "prof"){
        this.loginHelper.user = userFiltered[0];
        this.loginHelper.isLogin = true;
        this.loginHelper.profil = "prof";
        this.router.navigate(['/homePage', {outlets: {sidebar: ['testeProf']}}]);
      }
    }
  }

  this.parolaIncorecta = true;
}

ngOnDestroy(){
  this.userSubscription.unsubscribe();
}
}
