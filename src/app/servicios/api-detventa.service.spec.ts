import { TestBed } from '@angular/core/testing';

import { ApiDetventaService } from './api-detventa.service';

describe('ApiDetventaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiDetventaService = TestBed.get(ApiDetventaService);
    expect(service).toBeTruthy();
  });
});
