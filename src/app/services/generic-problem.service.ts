import { Injectable } from '@angular/core';
import { GenerateRandomNumberService } from './generate-random-number.service';
import { DoubleOperand } from '../interfaces/double-operand';

@Injectable({
  providedIn: 'root'
})
export class GenericProblemService {

  constructor() { }

  simplifyDefaults(defaultNumbers: Array<number>, nullableNumbers: Array<number>) {
    let returnList = [];
    for(let i = 0; i < nullableNumbers.length; i++) {
      let item = nullableNumbers[i];
      if (item === null || item === undefined) {
        returnList.push(defaultNumbers[i]);
      } else {
        returnList.push(nullableNumbers[i]);
      }
    }
    return returnList;
  }
}
