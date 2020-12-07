import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComEliminarComponent } from './com-eliminar.component';

describe('ComEliminarComponent', () => {
  let component: ComEliminarComponent;
  let fixture: ComponentFixture<ComEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
