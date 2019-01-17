import { Component, OnInit, Inject } from '@angular/core';
import { LoginHelperService } from 'src/services/login/login-helper.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

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
  initials: string;
  constructor(public loginHelper: LoginHelperService,
    private router: Router,
    private http: HttpClient,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {

    this.userSubscription = this.http
      .get<IUser[]>("https://final-codedown-georgipaler.c9users.io/get/users").subscribe(users => {
        console.log("users", users);

        this.user = users.filter(user => user.profil == this.loginHelper.profil)[0];
        // this.saveInLocal(1, this.user.id);

        // this.getFromLocal(1);

        this.initials = this.splitName();
      });

   
  }

  private splitName() {
    return this.user ? this.user.nume.split(" ").map(value => value[0]).join("").substring(0, 2).toLocaleUpperCase() : "";
};

  // saveInLocal(key, val): void {
  //   console.log('recieved= key:' + key + 'value:' + val);
  //   this.storage.set(key, val);
  //   this.user[key] = this.storage.get(key);
  // }

  // getFromLocal(key): void {
  //   console.log('recieved= key:' + key);
  //   this.user[key]= this.storage.get(key);
  //   console.log(this.user);
  //  }

  logout() {
    this.router.navigate(["/welcome"])
    this.loginHelper.isLogin = false;
  }

}
