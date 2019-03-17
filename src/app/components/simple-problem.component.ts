import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AddService } from '../problems/add.service';
import { CountdownService } from '../services/countdown.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-simple-problem',
  templateUrl: './simple-problem.component.html',
  styleUrls: ['./simple-problem.component.scss']
})
export class SimpleProblemComponent implements OnInit, OnDestroy {
  score = 0;
  timeLeft: number;
  firstOperand: number;
  secondOperand: number;
  userAnswer: number;
  operator = '+';
  isCorrect = false;
  timeout;

  constructor(private addService: AddService, private timer: CountdownService) { }

  ngOnInit() {
    this.setNewProblem();
    this.setTimer();
  }

  ngOnDestroy() {
    if (!this.timeout === undefined) {
      clearTimeout(this.timeout);
    }
    this.timer.cancel();
  }

  setTimer() {
    this.timeLeft = 20;
    this.timer.startTime = this.timeLeft;
    this.timer.callbackFunc = this.setNewProblem.bind(this);
    this.timer.tickFunc = (() => { this.timeLeft-- }).bind(this);
    this.timer.countDown();
  }

  outOfTime() {
    this.timeLeft--;
    // TODO: Show results and ask to go again
  }

  setNewProblem () {
    let problem = this.addService.generate();
    this.firstOperand = problem.first;
    this.secondOperand = problem.second;
  }

  submitAnswer() {
    this.isCorrect = this.addService.check(this.userAnswer);
    if (this.isCorrect) {
      this.submittedCorrectAnswer();
    } else {
      this.submittedIncorrectAnswer();
    }
    this.userAnswer = null;
  }

  submittedCorrectAnswer() {
    this.setNewProblem();
    this.score++;
  }

  submittedIncorrectAnswer() {
    this.setNewProblem();
  }
}
