import { TestBed } from '@angular/core/testing';

import { CookingService } from './cooking.service';

describe('CookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookingService = TestBed.get(CookingService);
    expect(service).toBeTruthy();
  });
});
