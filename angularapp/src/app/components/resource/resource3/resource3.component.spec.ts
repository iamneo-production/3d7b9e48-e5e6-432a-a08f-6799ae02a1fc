import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource3Component } from './resource3.component';

describe('Resource3Component', () => {
  let component: Resource3Component;
  let fixture: ComponentFixture<Resource3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Resource3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Resource3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
