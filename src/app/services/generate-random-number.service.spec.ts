import { TestBed } from '@angular/core/testing';

import { GenerateRandomNumberService } from './generate-random-number.service';

describe('GenerateRandomNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateRandomNumberService = TestBed.get(GenerateRandomNumberService);
    expect(service).toBeTruthy();
  });
});
