import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateAdicionComponent } from './cate-adicion.component';
import { ApiCategoriaService } from '../../../servicios/api-categoria.service';
import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('CateAdicionComponent', () => {
  let component: CateAdicionComponent;
  let fixture: ComponentFixture<CateAdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateAdicionComponent ],
      providers: [ApiCategoriaService],
      imports: [HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateAdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When onSubmit() is called', () => {
 



    it('all should be fine', () => {
      spyOn(component.api10,'Post').and.returnValue(of({ response:[]}));
      component.onSubmit();
      expect(component.onSubmit).toBeFalsy();
    })
  });

});
