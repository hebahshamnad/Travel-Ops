import { Component,OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

export interface Conference {
  name: string;
  date: string;
  location: string;
  organizer: string;
  link: string;
}

const CONFERENCE_DATA: Conference[] = [
  {name: 'TechCrunch Disrupt 2024', date: '2024-09-19', location: 'San Francisco, CA', organizer: 'TechCrunch', link: 'https://techcrunch.com/events/'},
  {name: 'HLTH 2024', date: '2024-10-13', location: 'Las Vegas, NV', organizer: 'HLTH', link: 'https://www.hlth.com/event/'},
  {name: 'SXSW EDU 2024', date: '2024-03-04', location: 'Austin, TX', organizer: 'SXSW', link: 'https://www.sxswedu.com/'},
  {name: 'AI Summit New York 2024', date: '2024-12-11', location: 'New York, NY', organizer: 'AI Summit', link: 'https://newyork.theaisummit.com/'},
  {name: 'Renewable Energy World International', date: '2024-12-10', location: 'Orlando, FL', organizer: 'Clarion Events', link: 'https://www.rewintl.com/'},
  {name: 'Blockchain Expo North America', date: '2024-11-28', location: 'Santa Clara, CA', organizer: 'Encore Media Group', link: 'https://blockchain-expo.com/northamerica/'},
  {name: 'FinovateFall 2024', date: '2024-09-23', location: 'New York, NY', organizer: 'Informa Connect', link: 'https://informaconnect.com/finovatefall/'},
  {name: 'RSA Conference 2025', date: '2025-02-24', location: 'San Francisco, CA', organizer: 'RSA Security LLC', link: 'https://www.rsaconference.com/usa'},
  {name: 'Smart City Expo World Congress', date: '2024-11-19', location: 'Barcelona, Spain', organizer: 'Fira de Barcelona', link: 'https://www.smartcityexpo.com/'},
  {name: 'CES 2025', date: '2025-01-07', location: 'Las Vegas, NV', organizer: 'Consumer Technology Association', link: 'https://www.ces.tech/'},
];


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  constructor(private router: Router) {}

  displayedColumns: string[] = ['name', 'date', 'location', 'organizer','actions'];
  dataSource = new MatTableDataSource<Conference>(CONFERENCE_DATA);
  
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(CONFERENCE_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  signUpforEvent(event: Conference){
    console.log(event)
    
    this.router.navigateByUrl('events/signup')

  }
}

