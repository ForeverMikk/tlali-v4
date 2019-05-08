import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CilantroPage } from './cilantro.page';

describe('CilantroPage', () => {
  let component: CilantroPage;
  let fixture: ComponentFixture<CilantroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CilantroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CilantroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
