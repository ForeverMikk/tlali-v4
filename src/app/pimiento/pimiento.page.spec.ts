import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PimientoPage } from './pimiento.page';

describe('PimientoPage', () => {
  let component: PimientoPage;
  let fixture: ComponentFixture<PimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PimientoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
