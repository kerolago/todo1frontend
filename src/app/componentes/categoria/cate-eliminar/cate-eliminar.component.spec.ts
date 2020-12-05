import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateEliminarComponent } from './cate-eliminar.component';

describe('CateEliminarComponent', () => {
  let component: CateEliminarComponent;
  let fixture: ComponentFixture<CateEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
