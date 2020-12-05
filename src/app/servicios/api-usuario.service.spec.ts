import { TestBed } from '@angular/core/testing';

import { ApiUsuarioService } from './api-usuario.service';

describe('ApiUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiUsuarioService = TestBed.get(ApiUsuarioService);
    expect(service).toBeTruthy();
  });
});
