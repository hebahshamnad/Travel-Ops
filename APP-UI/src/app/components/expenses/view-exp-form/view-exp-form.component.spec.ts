import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpFormComponent } from './view-exp-form.component';

describe('ViewExpFormComponent', () => {
  let component: ViewExpFormComponent;
  let fixture: ComponentFixture<ViewExpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewExpFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewExpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
