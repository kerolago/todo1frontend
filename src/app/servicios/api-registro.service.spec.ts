import { TestBed } from '@angular/core/testing';

import { ApiRegistroService } from './api-registro.service';

describe('ApiRegistroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiRegistroService = TestBed.get(ApiRegistroService);
    expect(service).toBeTruthy();
  });
});
