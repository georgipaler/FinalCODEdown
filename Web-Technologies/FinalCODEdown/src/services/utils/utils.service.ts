import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public testInfo;

  public interval;
  public timeLeft: number = 0;
  

  constructor() { }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 1800;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  displayTimeElapsed(){
    return Math.floor(this.timeLeft / 3600) + ':' + Math.floor(this.timeLeft / 60 ) + ':' + Math.floor(this.timeLeft % 60);
  }

}
