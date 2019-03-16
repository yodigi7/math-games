import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  private _startTime: number;
  public currentTime: number;
  public callbackFunc: Function;
  private tickInterval;

  constructor() { }

  set startTime(duration: number) {
    this._startTime = duration;
  }

  cancel() {
    clearInterval(this.tickInterval);
  }

  countDown() {
    this.currentTime = this._startTime;
    this.tickInterval = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    if(--this.currentTime === 0) {
      this.cancel();
      this.callbackFunc();
    }
  }
}
