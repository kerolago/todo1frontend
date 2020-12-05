import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateEdicionComponent } from './cate-edicion.component';

describe('CateEdicionComponent', () => {
  let component: CateEdicionComponent;
  let fixture: ComponentFixture<CateEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
