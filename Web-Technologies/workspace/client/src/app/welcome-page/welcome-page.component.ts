import { Component, OnInit } from '@angular/core';
import { LoginHelperService } from 'src/services/login/login-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private loginHelper: LoginHelperService,
    private router: Router) { }

  ngOnInit() {
  }

  checkRole(role:string){
    this.loginHelper.isTeacher= role !== 'student';
    console.log(this.loginHelper.isTeacher)

    this.router.navigate(["/login"]);


  }
}
