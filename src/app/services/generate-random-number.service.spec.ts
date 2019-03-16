import { TestBed } from '@angular/core/testing';

import { GenerateRandomNumberService } from './generate-random-number.service';

describe('GenerateRandomNumberService', () => {
  let randomNumberService: GenerateRandomNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    randomNumberService = new GenerateRandomNumberService();
  });

  it('should be created', () => {
    const service: GenerateRandomNumberService = TestBed.get(GenerateRandomNumberService);
    expect(service).toBeTruthy();
  });

  it('#getRandomNumber should generate a random number between the range', () => {
    let randNum = randomNumberService.getRandomNumber(0, 10);
    expect(randNum).toBeGreaterThanOrEqual(0);
    expect(randNum).toBeLessThanOrEqual(10);
  });
});
