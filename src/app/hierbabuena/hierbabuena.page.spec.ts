import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierbabuenaPage } from './hierbabuena.page';

describe('HierbabuenaPage', () => {
  let component: HierbabuenaPage;
  let fixture: ComponentFixture<HierbabuenaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierbabuenaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierbabuenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
