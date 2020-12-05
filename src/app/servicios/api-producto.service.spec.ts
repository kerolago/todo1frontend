import { TestBed } from '@angular/core/testing';

import { ApiProductoService } from './api-producto.service';

describe('ApiProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiProductoService = TestBed.get(ApiProductoService);
    expect(service).toBeTruthy();
  });
});
