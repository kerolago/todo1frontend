import { TestBed, getTestBed } from '@angular/core/testing';

import { ApiCategoriaService } from './api-categoria.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing'; 

describe('ApiCategoriaService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });
  it('should return an Observable<get>', ()=> {
    const service: ApiCategoriaService = TestBed.get(ApiCategoriaService);
    const dummys =[{id: '5fcd1271dcc8fe9674f2d433' },{nombre: 'camisas'}];
    service.Get().subscribe(cate=>{
      expect(cate).toEqual(dummys);
    });
    const req = httpMock.expectOne('http://localhost:5501/api/categoria');
    expect(req.request.method).toBe('Get');
    req.flush(dummys);
  })

  it('should return an error', ()=> {
    const service: ApiCategoriaService = TestBed.get(ApiCategoriaService);
    const dummyse ={error: 'error' };
    service.GetId('5fcd1271dcc8fe9674f2d433').subscribe(cates=>{
      expect(cates).toEqual(dummyse);
    });
    const req = httpMock.expectOne('http://localhost:5501/api/categoria/');
    expect(req.request.method).toBe('Get');
    req.flush(dummyse);
  })
 
});
