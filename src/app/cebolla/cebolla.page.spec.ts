import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CebollaPage } from './cebolla.page';

describe('CebollaPage', () => {
  let component: CebollaPage;
  let fixture: ComponentFixture<CebollaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CebollaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CebollaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
