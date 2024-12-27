import { Component, OnInit,ViewChild } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event.model';
import { ClaimService } from '../../services/claim.service';
import { Claim } from '../../models/claim.model';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  constructor(private eventsService: EventsService, private claimService: ClaimService) {}
  events: Event[] = [];
  claims: Claim[] = [];
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.fetchEvents();
    this.fetchClaims();
  }
 
  fetchEvents(): void {
    this.eventsService.GetEvents().subscribe((data: Event[]) => {
      this.events = data;
    });
  }

  fetchClaims(): void {
    this.claimService.GetClaimList().subscribe((data: Claim[]) => {
      this.claims = data;
      
    });
  }
}
