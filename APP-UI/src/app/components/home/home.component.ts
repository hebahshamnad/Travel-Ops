import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { EventsService } from '../../services/events.service';
import { UserProfileService } from '../../services/user-profile.service';
import { Chart, CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, PieController, ArcElement } from 'chart.js'; // Import BarController
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the data labels plugin
import { Event } from '../../models/event.model';
import { User } from '../../models/user.model';
import { Signup } from '../../models/signup.model';

// Register the necessary components
Chart.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, PieController,ArcElement); // Register PieController


// Register the necessary components
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  
  
})
export class HomeComponent implements OnInit {

  chart: any;
  pie: any;
  eventCosts: any[] = [];
  personCosts: any[] = [];
  totalCosts: any = { totalRegistration: 0, totalTravel: 0, totalHotel: 0, totalMisc: 0 }; // Initialize with default values
  events: Event[] = [];
  users: User[] = [];
  highestSpenders: any[] = [];
  highestEvents: any[] = [];
  // ----------------------------------------------
  userCount: number = 0;
  eventCount: number = 0;
  pendingCount: number = 0;
  approvedCount: number = 0;
  rejectedCount: number = 0;

  constructor(private signupService: SignupService, private eventService: EventsService, private userService: UserProfileService

  ) { }

  ngOnInit(): void {
    this.getEventCost();
    this.GetCostPerPerson();
    this.GetTotalCosts();
    this.getNumOfEvents();
    this.getNumOfUsers();
    this.getNumofSignups();
  }
  // ----------------------------------------------
  getNumOfEvents(): void {
    this.eventService.GetEvents().subscribe(
      (data: Event[]) => {
        this.events = data;
        this.eventCount = this.events.length;  // Count the number of events
        console.log('Number of events:', this.eventCount);
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
  getNumOfUsers(): void {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
        this.userCount = this.users.length-1;  // Count the number of users
        console.log('Number of users:', this.userCount);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  getNumofSignups(): void {
    this.signupService.getSignups().subscribe(
      (data: Signup[]) => {
        this.pendingCount = data.filter(signup => signup.status === 'Pending').length;  // Count the number of pending signups
        console.log('Number of pending signups:', this.pendingCount);
        this.approvedCount = data.filter(signup => signup.status === 'Approved').length;  // Count the number of pending signups
        console.log('Number of approved signups:', this.approvedCount);
        this.rejectedCount = data.filter(signup => signup.status === 'Rejected').length;  // Count the number of pending signups
        console.log('Number of rejected signups:', this.rejectedCount);
      },
      (error) => {
        console.error('Error fetching signups:', error);
      }
    );
  }




  getEventCost(): void {
    this.signupService.getEventCost().subscribe(
      (data) => {
        this.eventCosts = data;        
        console.log('Event list:', this.eventCosts);
        this.highestEvents = this.eventCosts.sort((a, b) => b.value - a.value).slice(0, 3);  // Get the top 3 events
        console.log('Top 3 events:', this.highestEvents);
        this.createChart();  // Create the chart once data is available

      },
      (error) => {
        console.error('Error fetching event list:', error);
      }
    );
  }




  GetCostPerPerson(): void {
    this.signupService.GetCostPerPerson().subscribe(
      (data) => {
        this.personCosts = data;
        console.log('Person list:', this.personCosts);

        this.highestSpenders = this.personCosts.sort((a, b) => b.totalCost - a.totalCost).slice(0, 3);  // Get the top 3 spenders
        console.log('Top 3 spenders:', this.highestSpenders);
        const personNames = this.personCosts.map(person => person.employeeName);
        const personValues = this.personCosts.map(person => person.totalCost);
        this.createPieChart(personNames, personValues, 'personCanvas');  
      },
      (error) => {
        console.error('Error fetching person list:', error);
      }
    );
  }

  GetTotalCosts(): void {
    this.signupService.GetTotalCosts().subscribe(
      (data) => {
        this.totalCosts = data;
        console.log('Total costs:', this.totalCosts);
        const totalCostLabels = ['Registration', 'Travel', 'Hotel', 'Misc'];
        const totalCostValues = [
          this.totalCosts.totalRegistration,
          this.totalCosts.totalTravel,
          this.totalCosts.totalHotel,
          this.totalCosts.totalMisc
        ];
        this.createPieChart(totalCostLabels, totalCostValues, 'totalCostCanvas');

      },
      (error) => {
        console.error('Error fetching event costs:', error);
      }
    );
  }


  createPieChart(labels: string[], values: number[], canvasId: string): void {
    this.chart = new Chart(canvasId, {
      type: 'pie',  // Specify pie chart type
      data: {
        labels: labels,
        datasets: [{
          label: 'Costs',
          data: values,
          backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'], // Example colors
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            enabled: true
          }
        }
      }
    });
  }
  createChart(): void {
    const eventNames = this.eventCosts.map(event => event.name);
    const eventValues = this.eventCosts.map(event => event.value);

    this.chart = new Chart('canvas', {
      type: 'bar',  // Specify bar chart type
      data: {
        labels: eventNames,
        datasets: [{
          label: 'Event Values',
          data: eventValues,
          backgroundColor: '#6ec7cc',
          borderColor: '#6ec7cc',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            enabled: true
          },
          datalabels: {
            display: true,
            color: '#000',  // Set the text color of the labels
            font: {
              weight: 'bold',
              size: 14
            },
            formatter: (value) => {
              return value;  // Show the exact value on top of each bar
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
