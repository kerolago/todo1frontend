import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoAdicionComponent } from './producto-adicion.component';

describe('ProductoAdicionComponent', () => {
  let component: ProductoAdicionComponent;
  let fixture: ComponentFixture<ProductoAdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoAdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoAdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
