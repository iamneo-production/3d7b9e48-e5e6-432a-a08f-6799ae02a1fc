import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource2Component } from './resource2.component';

describe('Resource2Component', () => {
  let component: Resource2Component;
  let fixture: ComponentFixture<Resource2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Resource2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Resource2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
