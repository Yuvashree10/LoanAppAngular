import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationStatusComponent } from './loan-application-status.component';

describe('LoanApplicationStatusComponent', () => {
  let component: LoanApplicationStatusComponent;
  let fixture: ComponentFixture<LoanApplicationStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanApplicationStatusComponent]
    });
    fixture = TestBed.createComponent(LoanApplicationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
