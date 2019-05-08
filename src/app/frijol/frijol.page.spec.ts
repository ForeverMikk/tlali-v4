import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrijolPage } from './frijol.page';

describe('FrijolPage', () => {
  let component: FrijolPage;
  let fixture: ComponentFixture<FrijolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrijolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrijolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
