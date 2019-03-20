import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StolovayaComponent } from './stolovaya.component';

describe('StolovayaComponent', () => {
  let component: StolovayaComponent;
  let fixture: ComponentFixture<StolovayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StolovayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StolovayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
