import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Signup } from '../../../models/signup.model'; // Import Signup model

@Component({
  selector: 'app-view-approval-form',
  templateUrl: './view-approval-form.component.html',
  styleUrls: ['./view-approval-form.component.css'] 
})
export class ViewApprovalFormComponent {
  @Input() signup!: Signup;  // Declare signup with the correct type (Signup model)
  @Output() approve = new EventEmitter<number>();
  @Output() reject = new EventEmitter<number>();
  @Output() goBack = new EventEmitter<void>();
}
