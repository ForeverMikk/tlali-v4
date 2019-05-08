import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesPage } from './instrucciones.page';

describe('InstruccionesPage', () => {
  let component: InstruccionesPage;
  let fixture: ComponentFixture<InstruccionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstruccionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstruccionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
