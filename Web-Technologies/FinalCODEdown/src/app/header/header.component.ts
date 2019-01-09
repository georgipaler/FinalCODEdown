import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user : any = {
    nume: "Madalina",
    prenume: "Pana",
    grupa: "1073"
  }
  constructor() { }

  ngOnInit() {
  }

}
