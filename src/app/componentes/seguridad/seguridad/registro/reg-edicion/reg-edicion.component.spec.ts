import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegEdicionComponent } from './reg-edicion.component';

describe('RegEdicionComponent', () => {
  let component: RegEdicionComponent;
  let fixture: ComponentFixture<RegEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
