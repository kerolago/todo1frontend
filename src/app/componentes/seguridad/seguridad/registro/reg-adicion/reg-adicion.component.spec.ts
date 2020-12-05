import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAdicionComponent } from './reg-adicion.component';

describe('RegAdicionComponent', () => {
  let component: RegAdicionComponent;
  let fixture: ComponentFixture<RegAdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegAdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegAdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
