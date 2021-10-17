import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource5Component } from './resource5.component';

describe('Resource5Component', () => {
  let component: Resource5Component;
  let fixture: ComponentFixture<Resource5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Resource5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Resource5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
