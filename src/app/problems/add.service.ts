import { Injectable } from '@angular/core';
import { SimpleProblem } from '../interfaces/simple-problem-service.interface';
import { GenerateRandomNumberService } from '../services/generate-random-number.service';
import { DoubleOperand } from '../interfaces/double-operand';
import { GenericProblemService } from '../services/generic-problem.service';

@Injectable({
  providedIn: 'root'
})
export class AddService implements SimpleProblem {

  private desiredAnswer: number;
  private readonly defaults = [
    0,  // First lower bound
    10, // First upper bound
    0,  // Second lower bound
    10  // Second upper bound
  ]

  constructor(private randomNumberGenerator: GenerateRandomNumberService,
              private genericService: GenericProblemService) { }

  check(answer: number): boolean {
    if (answer === this.desiredAnswer) {
      return true;
    }
    return false;
  }

  generate(firstUpperBound?: number, firstLowerBound?: number, secondUpperBound?: number, secondLowerBound?: number): DoubleOperand {
    [ firstLowerBound, firstUpperBound, secondLowerBound, secondUpperBound ] = this.genericService.simplifyDefaults(
      [ this.defaults[0], this.defaults[1], this.defaults[2], this.defaults[3] ],
      [ firstLowerBound, firstUpperBound, secondLowerBound, secondUpperBound ]);
    
    this.desiredAnswer = this.randomNumberGenerator.getRandomNumber(firstLowerBound + secondLowerBound, firstUpperBound + secondUpperBound)
    
    let firstOperand: number, secondOperand: number;
    if (this.randomNumberGenerator.getRandomNumber(0, 1)) {
      let i = firstLowerBound;
      let j = firstUpperBound;
      for (i = firstLowerBound; (i + secondUpperBound < this.desiredAnswer) && (i < firstUpperBound); i++) {}
      for (j = firstUpperBound; (j + secondLowerBound > this.desiredAnswer) && (j > firstLowerBound); j--) {}
      firstOperand = this.randomNumberGenerator.getRandomNumber(i, j);
      secondOperand = this.desiredAnswer - firstOperand;
    } else {
      let i = secondLowerBound;
      let j = secondUpperBound;
      for (i = secondLowerBound; (i + firstUpperBound < this.desiredAnswer) && (i < secondUpperBound); i++) {}
      for (j = secondUpperBound; (j + firstLowerBound > this.desiredAnswer) && (j > secondLowerBound); j--) {}
      secondOperand = this.randomNumberGenerator.getRandomNumber(i, j);
      firstOperand = this.desiredAnswer - secondOperand;
    }

    return {
      first: firstOperand,
      second: secondOperand
    }
  }
}