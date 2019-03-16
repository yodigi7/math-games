import { TestBed } from '@angular/core/testing';

import { GenericProblemService } from './generic-problem.service';
import { GenerateRandomNumberService } from './generate-random-number.service';

describe('GenericProblemService', () => {
  let randomNumberGenerator = new GenerateRandomNumberService();
  let genericProblemService = new GenericProblemService(randomNumberGenerator);

  beforeEach(() => TestBed.configureTestingModule({}));

  it('#simplifyDefaults should be created', () => {
    const service: GenericProblemService = TestBed.get(GenericProblemService);
    expect(service).toBeTruthy();
  });

  it('#simplifyDefaults should replace all nulls with default', () => {
    let inputs = [null, null, null, null];
    let defaults = [0, 1, 1, 1];
    let returnValue = genericProblemService.simplifyDefaults(defaults, inputs);
    expect(returnValue[0]).toEqual(0);
    expect(returnValue[1]).toEqual(1);
    expect(returnValue[2]).toEqual(1);
    expect(returnValue[3]).toEqual(1);
  });

  it('#simplifyDefaults should not replace if none are null', () => {
    let inputs = [1, 1, 1, 1];
    let defaults = [10, 10, 10, 10];
    let returnValue = genericProblemService.simplifyDefaults(defaults, inputs);
    expect(returnValue[0]).toEqual(1);
    expect(returnValue[1]).toEqual(1);
    expect(returnValue[2]).toEqual(1);
    expect(returnValue[3]).toEqual(1);
  });

  it('#simplifyDefaults should only replace the ones that are null', () => {
    let inputs = [1, null, null, 1];
    let defaults = [10, 10, 10, 10];
    let returnValue = genericProblemService.simplifyDefaults(defaults, inputs);
    expect(returnValue[0]).toEqual(1);
    expect(returnValue[1]).toEqual(10);
    expect(returnValue[2]).toEqual(10);
    expect(returnValue[3]).toEqual(1);
  })
});
