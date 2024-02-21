import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionFixComponent } from './change-detection-fix.component';

describe('ChangeDetectionFixComponent', () => {
  let component: ChangeDetectionFixComponent;
  let fixture: ComponentFixture<ChangeDetectionFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionFixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
