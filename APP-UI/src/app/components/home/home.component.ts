import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { Chart, CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip } from 'chart.js'; // Import BarController
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the data labels plugin

// Register the necessary components
Chart.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  
  
})
export class HomeComponent implements OnInit {

  chart: any;
  eventCosts: any[] = [];
  personCosts: any[] = [];

  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
    this.getEventCost();
  }

  getEventCost(): void {
    this.signupService.getEventCost().subscribe(
      (data) => {
        this.eventCosts = data;
        console.log('Event costs:', this.eventCosts);
        this.createChart();  // Create the chart once data is available

      },
      (error) => {
        console.error('Error fetching event costs:', error);
      }
    );
  }

  

  GetCostPerPerson(): void {
    this.signupService.GetCostPerPerson().subscribe(
      (data) => {
        this.personCosts = data;
        console.log('Person costs:', this.personCosts);
        this.createChart();  // Create the chart once data is available

      },
      (error) => {
        console.error('Error fetching event costs:', error);
      }
    );
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
