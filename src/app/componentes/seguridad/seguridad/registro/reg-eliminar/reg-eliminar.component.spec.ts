import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegEliminarComponent } from './reg-eliminar.component';

describe('RegEliminarComponent', () => {
  let component: RegEliminarComponent;
  let fixture: ComponentFixture<RegEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
