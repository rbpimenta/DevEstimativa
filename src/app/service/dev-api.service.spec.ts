import { TestBed } from '@angular/core/testing';

import { DevApiService } from './dev-api.service';

describe('DevApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevApiService = TestBed.get(DevApiService);
    expect(service).toBeTruthy();
  });
});
