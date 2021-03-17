import { TestBed } from '@angular/core/testing';

import { PalyerDataService } from './palyer-data.service';

describe('PalyerDataService', () => {
  let service: PalyerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalyerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
