import { Component, OnInit } from '@angular/core';
import { LoginHelperService } from 'src/services/login/login-helper.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //subscriptions
  userSubscription: Subscription;
  isTescher: boolean;
  user: IUser;
  constructor(public loginHelper: LoginHelperService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {

    this.userSubscription =  this.http
            .get<IUser[]>("https://final-codedown-georgipaler.c9users.io/get/users").subscribe(users => {
              console.log("users", users);

              this.user = users.filter(user => user.profil == this.loginHelper.profil)[0];
            });
  }

  logout(){
    this.router.navigate(["/welcome"])
    this.loginHelper.isLogin=false;
  }

}
