import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateProgrammeComponent } from './affiliate-programme.component';

describe('AffiliateProgrammeComponent', () => {
  let component: AffiliateProgrammeComponent;
  let fixture: ComponentFixture<AffiliateProgrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliateProgrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
