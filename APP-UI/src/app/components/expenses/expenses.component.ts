import { Component,OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent implements OnInit {
  constructor(private eventsService: EventsService) {}
  events: Event[] = [];
  
   ngOnInit(): void {
     this.fetchEvents();
   }
 
   fetchEvents(): void {
     this.eventsService.GetEvents().subscribe((data: Event[]) => {
       this.events = data;
     });
   }
}
