import { Injectable } from '@angular/core';
import { GenerateRandomNumberService } from './generate-random-number.service';
import { DoubleOperand } from '../interfaces/double-operand';

@Injectable({
  providedIn: 'root'
})
export class GenericProblemService {

  constructor(private randomNumberGenerator: GenerateRandomNumberService) { }

  simplifyDefaults(nullableNumbers: Array<number>, defaultNumbers: Array<number>) {
    let returnList = [];
    for(let i = 0; i < nullableNumbers.length; i++) {
      let item = nullableNumbers[i];
      if (item === null) {
        returnList.push(defaultNumbers[i]);
      } else {
        returnList.push(nullableNumbers[i]);
      }
    }
    return returnList;
  }

  generateTwoOperands([defaultFirstLowerBound, defaultFirstUpperBound, defaultSecondLowerBound, defaultSecondUpperBound],
                      [firstUpperBound, firstLowerBound, secondUpperBound, secondLowerBound]): DoubleOperand {
    [firstLowerBound, firstUpperBound, secondLowerBound, secondUpperBound] = this.simplifyDefaults(
      [firstLowerBound, firstUpperBound, secondLowerBound, secondUpperBound],
      [defaultFirstLowerBound, defaultFirstUpperBound, defaultSecondLowerBound, defaultSecondUpperBound])
    return {
      first: this.randomNumberGenerator.getRandomNumber(firstLowerBound, firstUpperBound),
      second: this.randomNumberGenerator.getRandomNumber(secondLowerBound, secondUpperBound)
    }
  }
}
