import { Component, OnInit } from '@angular/core';
import { AddService } from '../problems/add.service';

@Component({
  selector: 'app-simple-problem',
  templateUrl: './simple-problem.component.html',
  styleUrls: ['./simple-problem.component.sass']
})
export class SimpleProblemComponent implements OnInit {

  timeLeft: number;
  firstOperand: number;
  secondOperand: number;
  userAnswer: number;
  isCorrect = false;

  constructor(private addService: AddService) { }

  ngOnInit() {
    this.setNewProblem();
  }

  setNewProblem () {
    let problem = this.addService.generate();
    this.firstOperand = problem.first;
    this.secondOperand = problem.second;
  }

  submitAnswer() {
    this.isCorrect = this.addService.check(this.userAnswer);
  }
}
