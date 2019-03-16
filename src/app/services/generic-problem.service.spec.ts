import { TestBed } from '@angular/core/testing';

import { GenericProblemService } from './generic-problem.service';

describe('GenericProblemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericProblemService = TestBed.get(GenericProblemService);
    expect(service).toBeTruthy();
  });
});
