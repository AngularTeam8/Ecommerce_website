import { TestBed } from '@angular/core/testing';

import { AgeCalServiceService } from './age-cal-service.service';

describe('AgeCalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgeCalServiceService = TestBed.get(AgeCalServiceService);
    expect(service).toBeTruthy();
  });
});
