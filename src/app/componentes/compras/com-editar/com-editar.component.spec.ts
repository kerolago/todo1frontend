import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComEditarComponent } from './com-editar.component';

describe('ComEditarComponent', () => {
  let component: ComEditarComponent;
  let fixture: ComponentFixture<ComEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
