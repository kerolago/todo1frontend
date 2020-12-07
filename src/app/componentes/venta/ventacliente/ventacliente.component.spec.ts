import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaclienteComponent } from './ventacliente.component';

describe('VentaclienteComponent', () => {
  let component: VentaclienteComponent;
  let fixture: ComponentFixture<VentaclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
