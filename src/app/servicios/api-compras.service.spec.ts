import { TestBed } from '@angular/core/testing';

import { ApiComprasService } from './api-compras.service';

describe('ApiComprasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiComprasService = TestBed.get(ApiComprasService);
    expect(service).toBeTruthy();
  });
});
