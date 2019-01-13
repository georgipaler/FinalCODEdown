import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginHelperService {

  isTeacher: boolean;
  isLogin: boolean;

  constructor() { }
}
