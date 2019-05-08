import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerejilPage } from './perejil.page';

describe('PerejilPage', () => {
  let component: PerejilPage;
  let fixture: ComponentFixture<PerejilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerejilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerejilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
