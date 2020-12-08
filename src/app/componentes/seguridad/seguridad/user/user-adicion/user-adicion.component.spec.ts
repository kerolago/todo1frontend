import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdicionComponent } from './user-adicion.component';

describe('UserAdicionComponent', () => {
  let component: UserAdicionComponent;
  let fixture: ComponentFixture<UserAdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
