import { Component,OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event.model';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
  constructor(private router: Router, private eventsService: EventsService) {}

  displayedColumns: string[] = ['name', 'date', 'location', 'organizer','actions'];
  dataSource = new MatTableDataSource<Event>();
  
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.eventsService.GetEvents().subscribe((data: Event[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  signUpforEvent(event: Event){
    console.log(event)
    
    this.router.navigateByUrl('events/signup')

  }
}

