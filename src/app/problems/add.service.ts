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
    let returnObject = this.genericService.generateTwoOperands(
      [this.defaults[0], this.defaults[1], this.defaults[2], this.defaults[3]], 
      [firstUpperBound, firstLowerBound, secondUpperBound, secondLowerBound]);
    this.desiredAnswer = returnObject.first + returnObject.second;
    console.log(returnObject);
    console.log([this.defaults[0], this.defaults[1], this.defaults[2], this.defaults[3]]);
    return returnObject;
  }
}
