import { Component, OnInit, ViewChild } from '@angular/core';
import { AddService } from '../problems/add.service';
import { CountdownService } from '../services/countdown.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-simple-problem',
  templateUrl: './simple-problem.component.html',
  styleUrls: ['./simple-problem.component.scss']
})
export class SimpleProblemComponent implements OnInit {
  timeLeft: number;
  firstOperand: number;
  secondOperand: number;
  userAnswer: number;
  operator = '+';
  isCorrect = false;

  constructor(private addService: AddService, private timer: CountdownService) { }

  ngOnInit() {
    this.setNewProblem();
    this.setTimer();
  }

  setTimer() {
    this.timeLeft = 20;
    this.timer.startTime = this.timeLeft;
    this.timer.callbackFunc = this.setNewProblem.bind(this);
    this.timer.tickFunc = (() => { this.timeLeft-- }).bind(this);
    this.timer.countDown();
  }

  setNewProblem () {
    console.log("creating new problem")
    let problem = this.addService.generate();
    this.firstOperand = problem.first;
    this.secondOperand = problem.second;
  }

  submitAnswer() {
    console.log(this.userAnswer);
    this.isCorrect = this.addService.check(this.userAnswer);
    this.setNewProblem();
    this.userAnswer = null;
  }
}
