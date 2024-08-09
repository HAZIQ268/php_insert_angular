import { TestBed } from '@angular/core/testing';

import { PhpDataService } from './php-data.service';

describe('PhpDataService', () => {
  let service: PhpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
