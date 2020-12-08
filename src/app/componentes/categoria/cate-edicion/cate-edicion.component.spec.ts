import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateEdicionComponent } from './cate-edicion.component';
import { throwError, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ApiCategoriaService } from '../../../servicios/api-categoria.service';

describe('CateEdicionComponent', () => {
  let component: CateEdicionComponent;
  let fixture: ComponentFixture<CateEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateEdicionComponent ],
      providers: [ApiCategoriaService],
      imports: [HttpClientModule],    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When onSubmit() is called', () => {
    

    it('all should be fine', () => {
      spyOn(component.api10,'Patch').and.returnValue(of({ modelo:[]}));
      component.onSubmit();
      expect(component.onSubmit).toBeFalsy();
    })

   

  });
});
