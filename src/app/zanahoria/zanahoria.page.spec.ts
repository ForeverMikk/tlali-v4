import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanahoriaPage } from './zanahoria.page';

describe('ZanahoriaPage', () => {
  let component: ZanahoriaPage;
  let fixture: ComponentFixture<ZanahoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZanahoriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanahoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
