import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resource4Component } from './resource4.component';

describe('Resource4Component', () => {
  let component: Resource4Component;
  let fixture: ComponentFixture<Resource4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Resource4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Resource4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
