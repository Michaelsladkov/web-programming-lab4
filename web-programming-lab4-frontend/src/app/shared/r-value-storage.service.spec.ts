import { TestBed } from '@angular/core/testing';

import { RValueStorageService } from './r-value-storage.service';

describe('RValueStorageService', () => {
  let service: RValueStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RValueStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
