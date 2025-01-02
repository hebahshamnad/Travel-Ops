import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Event } from '../../../models/event.model';
@Component({
  selector: 'app-view-exp-form',
  templateUrl: './view-exp-form.component.html',
  styleUrl: './view-exp-form.component.css'
})
export class ViewExpFormComponent {
  @Input() events: Event[] = []; 
  @Input() claim: any; 
  @Input() isSubmit: boolean = false;
  @Output() onSubmit = new EventEmitter<any>(); 
  @Output() goBack = new EventEmitter<void>();
  onFormSubmit() {
    this.onSubmit.emit(this.claim); // Pass the claim data to the parent component
  }


}
