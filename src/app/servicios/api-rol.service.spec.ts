import { TestBed } from '@angular/core/testing';

import { ApiRolService } from './api-rol.service';

describe('ApiRolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiRolService = TestBed.get(ApiRolService);
    expect(service).toBeTruthy();
  });
});
