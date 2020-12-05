import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEliminarComponent } from './cliente-eliminar.component';

describe('ClienteEliminarComponent', () => {
  let component: ClienteEliminarComponent;
  let fixture: ComponentFixture<ClienteEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
