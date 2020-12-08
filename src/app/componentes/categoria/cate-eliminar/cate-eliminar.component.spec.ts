import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateEliminarComponent } from './cate-eliminar.component';
import { throwError, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ApiCategoriaService } from '../../../servicios/api-categoria.service';

describe('CateEliminarComponent', () => {
  let component: CateEliminarComponent;
  let fixture: ComponentFixture<CateEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateEliminarComponent ],
      providers: [ApiCategoriaService],
      imports: [HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When onSubmit() is called', () => {
    it('all should be fine', () => {
      spyOn(component.api10,'Delete').and.returnValue(of({ modelo:[]}));
      component.onSubmit();
      expect(component.onSubmit).toBeFalsy();
    })
  });
});
