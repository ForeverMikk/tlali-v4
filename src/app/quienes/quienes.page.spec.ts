import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesPage } from './quienes.page';

describe('QuienesPage', () => {
  let component: QuienesPage;
  let fixture: ComponentFixture<QuienesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuienesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
