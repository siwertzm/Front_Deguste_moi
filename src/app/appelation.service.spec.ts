import { TestBed } from '@angular/core/testing';

import { AppelationService } from './appelation.service';

describe('AppelationService', () => {
  let service: AppelationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppelationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
