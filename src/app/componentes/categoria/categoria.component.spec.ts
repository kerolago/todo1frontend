import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaComponent } from './categoria.component';
import { ApiCategoriaService } from '../../servicios/api-categoria.service';
import { throwError } from 'rxjs';

describe('CategoriaComponent', () => {
  let component: CategoriaComponent;
  let fixture: ComponentFixture<CategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaComponent ],
      providers: [ApiCategoriaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  


});
