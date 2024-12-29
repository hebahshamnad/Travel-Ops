import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event.model';
import { ClaimService } from '../../services/claim.service';
import { Claim } from '../../models/claim.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit, AfterViewInit {
  constructor(private eventsService: EventsService, private claimService: ClaimService) {}
  events: Event[] = [];
  displayedColumns: string[] = [ 'event','vendor', 'date', 'amount', 'status','actions'];

  dataSource = new MatTableDataSource<Claim>();

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

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  fetchClaims(): void {
    this.claimService.GetClaimList().subscribe((data: Claim[]) => {
      this.dataSource.data = data;
    });
  }
}
