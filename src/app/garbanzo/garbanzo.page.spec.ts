import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbanzoPage } from './garbanzo.page';

describe('GarbanzoPage', () => {
  let component: GarbanzoPage;
  let fixture: ComponentFixture<GarbanzoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarbanzoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarbanzoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
