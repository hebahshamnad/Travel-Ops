import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../../services/signup.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event-signup',
  templateUrl: './event-signup.component.html',
  styleUrl: './event-signup.component.css'
})
export class EventSignupComponent implements OnInit {
  signup = {
    name: '',
    email: '',
    department: '',
    branch: '',
    manager: '',
    eventType: '',
    purpose: '',
    date: '',
    location: '',
    organizer: '',
    mode: '',
    registrationCost: 0,
    travelCost: 0,
    hotelCost: 0,
    miscCost: 0,
    description: '',
    status: 'Pending',
    GenDate: ''
  };

  constructor(
    private signupService: SignupService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (this.signup.date) {
      const date = new Date(this.signup.date);
      if (!isNaN(date.getTime())) {
        this.signup.date = date.toISOString().split('T')[0];
      } else {
        console.error('Invalid date format');
        return;
      }
    }

    this.signupService.addSignup(this.signup).subscribe({
      next: (response) => {
        console.log('Signup successful', response);
        this.snackBar.open('Event signup submitted successfully', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
        this.resetForm();
      },
      error: (error) => {
        console.error('Error submitting signup', error);
        this.snackBar.open('Error submitting event signup', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      }
    });
  }

  onUndo() {
    this.resetForm();
  }

  private resetForm() {
    this.signup = {
      name: '',
      email: '',
      department: '',
      branch: '',
      manager: '',
      eventType: '',
      purpose: '',
      date: '',
      location: '',
      organizer: '',
      mode: '',
      registrationCost: 0,
      travelCost: 0,
      hotelCost: 0,
      miscCost: 0,
      description: '',
      status: 'Pending',
      GenDate: ''
    };
  }
}