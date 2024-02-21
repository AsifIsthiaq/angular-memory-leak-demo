import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryLeakFixComponent } from './memory-leak-fix.component';

describe('MemoryLeakFixComponent', () => {
  let component: MemoryLeakFixComponent;
  let fixture: ComponentFixture<MemoryLeakFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryLeakFixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryLeakFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
