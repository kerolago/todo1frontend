import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAdicionComponent } from './cliente-adicion.component';

describe('ClienteAdicionComponent', () => {
  let component: ClienteAdicionComponent;
  let fixture: ComponentFixture<ClienteAdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteAdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
