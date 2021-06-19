import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assessment2Component } from './assessment2.component';

describe('Assessment2Component', () => {
  let component: Assessment2Component;
  let fixture: ComponentFixture<Assessment2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assessment2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assessment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
