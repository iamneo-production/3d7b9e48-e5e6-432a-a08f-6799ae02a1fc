import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource6Component } from './resource6.component';

describe('Resource6Component', () => {
  let component: Resource6Component;
  let fixture: ComponentFixture<Resource6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Resource6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Resource6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
