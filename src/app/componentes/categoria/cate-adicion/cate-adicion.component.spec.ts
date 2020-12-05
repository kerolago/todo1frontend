import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateAdicionComponent } from './cate-adicion.component';

describe('CateAdicionComponent', () => {
  let component: CateAdicionComponent;
  let fixture: ComponentFixture<CateAdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateAdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateAdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
