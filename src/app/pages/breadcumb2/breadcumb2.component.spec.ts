import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Breadcumb2Component } from './breadcumb2.component';

describe('Breadcumb2Component', () => {
  let component: Breadcumb2Component;
  let fixture: ComponentFixture<Breadcumb2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Breadcumb2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Breadcumb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
