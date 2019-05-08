import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalabazaPage } from './calabaza.page';

describe('CalabazaPage', () => {
  let component: CalabazaPage;
  let fixture: ComponentFixture<CalabazaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalabazaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalabazaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
