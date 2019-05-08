import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChicharoPage } from './chicharo.page';

describe('ChicharoPage', () => {
  let component: ChicharoPage;
  let fixture: ComponentFixture<ChicharoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChicharoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChicharoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
