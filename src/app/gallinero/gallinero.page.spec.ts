import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallineroPage } from './gallinero.page';

describe('GallineroPage', () => {
  let component: GallineroPage;
  let fixture: ComponentFixture<GallineroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallineroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallineroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
