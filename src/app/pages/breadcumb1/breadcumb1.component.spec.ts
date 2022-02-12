import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Breadcumb1Component } from './breadcumb1.component';

describe('Breadcumb1Component', () => {
  let component: Breadcumb1Component;
  let fixture: ComponentFixture<Breadcumb1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Breadcumb1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Breadcumb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
