import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApprovalFormComponent } from './view-approval-form.component';

describe('ViewApprovalFormComponent', () => {
  let component: ViewApprovalFormComponent;
  let fixture: ComponentFixture<ViewApprovalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewApprovalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewApprovalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
