import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabanoPage } from './rabano.page';

describe('RabanoPage', () => {
  let component: RabanoPage;
  let fixture: ComponentFixture<RabanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabanoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
