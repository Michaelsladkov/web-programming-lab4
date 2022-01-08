import { TestBed } from '@angular/core/testing';

import { ShotsRepositoryService } from './shots-repository.service';

describe('ShotsRepositoryService', () => {
  let service: ShotsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShotsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
