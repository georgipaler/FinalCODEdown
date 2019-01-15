import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class LoginHelperService {

  profil: string;
  isLogin: boolean;

  user: IUser;

  constructor() { }
}
