import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearPage } from './clear.page';

describe('ClearPage', () => {
  let component: ClearPage;
  let fixture: ComponentFixture<ClearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
