/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StreetwearComponent } from './streetwear.component';

describe('StreetwearComponent', () => {
  let component: StreetwearComponent;
  let fixture: ComponentFixture<StreetwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
