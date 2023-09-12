import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankContentComponent } from './blank-content.component';

describe('BlankContentComponent', () => {
  let component: BlankContentComponent;
  let fixture: ComponentFixture<BlankContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlankContentComponent]
    });
    fixture = TestBed.createComponent(BlankContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
