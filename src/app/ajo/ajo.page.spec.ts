import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoPage } from './ajo.page';

describe('AjoPage', () => {
  let component: AjoPage;
  let fixture: ComponentFixture<AjoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
