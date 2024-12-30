import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event.model';
import { ClaimService } from '../../services/claim.service';
import { Claim } from '../../models/claim.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar'; // Add this import

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit, AfterViewInit {
  constructor(private eventsService: EventsService, private claimService: ClaimService, private snackBar: MatSnackBar) { }
  events: Event[] = [];
  displayedColumns: string[] = ['event', 'vendor', 'date', 'amount', 'status', 'actions'];
  dataSource = new MatTableDataSource<Claim>();
  @ViewChild(MatSort) sort!: MatSort;

  claim = {
    vendor: '',
    events: '',
    category: '',
    date: '',
    amount: 0,
    currency: '',
    status: 'Pending',
    description: '',
    receiptUrl: ''
  };

  ngOnInit(): void {
    this.fetchEvents();
    this.fetchClaims();
  }

  fetchEvents(): void {
    this.eventsService.GetEvents().subscribe((data: Event[]) => {
      this.events = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  fetchClaims(): void {
    this.claimService.GetClaimList().subscribe((data: Claim[]) => {
      this.dataSource.data = data;
    });
  }

  onSubmit() {
    if (this.claim.date) {
      const date = new Date(this.claim.date);
      if (!isNaN(date.getTime())) {
        this.claim.date = date.toISOString().split('T')[0];
      } else {
        console.error('Invalid date format');
        return;
      }
    } else {
      console.error('Date is required');
      return;
    }

    this.claimService.addClaim(this.claim).subscribe(
      (response) => {
        console.log('Claim added successfully', response);
        this.snackBar.open('Claim added successfully', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition:'right'
        });
        this.fetchClaims();
        this.resetForm();
      },
      (error) => {
        console.error('There was an error adding the claim', error);
        this.snackBar.open('Error adding claim', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition:'right'
        });
      }
    );
  }

  resetForm() {
    this.claim = {
      vendor: '',
      events: '',
      category: '',
      date: '',
      amount: 0,
      currency: '',
      status: 'Pending',
      description: '',
      receiptUrl: ''
    };
  }

}
