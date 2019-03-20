import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BufetComponent } from './bufet.component';

describe('BufetComponent', () => {
  let component: BufetComponent;
  let fixture: ComponentFixture<BufetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BufetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BufetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
