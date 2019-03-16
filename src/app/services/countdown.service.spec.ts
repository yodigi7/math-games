import { TestBed } from '@angular/core/testing';

import { CountdownService } from './countdown.service';

describe('CountdownService', () => {
  let service: CountdownService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new CountdownService();
  });

  it('should be created', () => {
    const service: CountdownService = TestBed.get(CountdownService);
    expect(service).toBeTruthy();
  });
});