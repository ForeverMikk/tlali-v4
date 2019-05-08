import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapaPage } from './papa.page';

describe('PapaPage', () => {
  let component: PapaPage;
  let fixture: ComponentFixture<PapaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
