import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campaign1Component } from './campaign1.component';

describe('Campaign1Component', () => {
  let component: Campaign1Component;
  let fixture: ComponentFixture<Campaign1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Campaign1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Campaign1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
