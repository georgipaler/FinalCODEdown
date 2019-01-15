import { Component, OnInit } from '@angular/core';
import { LoginHelperService } from 'src/services/login/login-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user : any = {
    nume: "Madalina",
    prenume: "Pana",
    id: "panamadalina16@stud.ase.ro"
  }
  constructor(public loginHelper: LoginHelperService,
    private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(["/welcome"])
    this.loginHelper.isLogin=false;
  }

}
