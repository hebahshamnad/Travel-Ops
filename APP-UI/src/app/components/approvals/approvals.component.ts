import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SignupService } from '../../services/signup.service';
import { Signup } from '../../models/signup.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrl: './approvals.component.css'
})
export class ApprovalsComponent implements OnInit {
  signups: MatTableDataSource<Signup>;
  employeeSignups: MatTableDataSource<Signup>;
  pendingSignups: MatTableDataSource<Signup>;
  pendingEmpSignups: MatTableDataSource<Signup>;


  isManager: boolean = true;
  pastMngCol: string[] = ['name', 'event', 'date', 'totalCost', 'status', 'actions'];
  pastEmpCol: string[] = ['event', 'date', 'location','totalCost', 'status', 'actions'];

  pendingMngColumns: string[] = ['name', 'event', 'date', 'totalCost', 'actions'];
  pendingEmpColumns: string[] = ['event', 'date', 'location','totalCost','actions'];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private signupService: SignupService, private snackBar: MatSnackBar) {
    this.signups = new MatTableDataSource<Signup>();
    this.pendingSignups = new MatTableDataSource<Signup>();
    this.employeeSignups= new MatTableDataSource<Signup>();
    this.pendingEmpSignups = new MatTableDataSource<Signup>();

  }

  ngOnInit() {
    this.loadSignups();
    this.signups.sort = this.sort;
    this.employeeSignups.sort = this.sort;
    this.pendingSignups.sort = this.sort;
    this.pendingEmpSignups.sort = this.sort;

  }

  ngAfterViewInit() {
    this.signups.sort = this.sort;
    this.employeeSignups.sort = this.sort;
    this.pendingSignups.sort = this.sort;
    this.pendingEmpSignups.sort = this.sort;
  }

  loadSignups() {
    this.signupService.getSignups().subscribe(data => {
      this.signups.data = data.filter((signup: Signup) => signup.status != 'Pending');
      this.pendingSignups.data = data.filter((signup: Signup) => signup.status == 'Pending');
      this.employeeSignups.data = data.filter((signup: Signup) => signup.name == 'John Doe');
      this.pendingEmpSignups.data = data.filter((signup: Signup) => signup.status === 'Pending' && signup.name === 'John Doe');
      this.signups.sort = this.sort;
    this.employeeSignups.sort = this.sort;
    this.pendingSignups.sort = this.sort;
    this.pendingEmpSignups.sort = this.sort;
    });
  }


  selectedSignup: any = null;

  viewRequest(signupData: any) {
    this.selectedSignup = signupData;
    this.signups.sort = this.sort;
    this.employeeSignups.sort = this.sort;
    this.pendingSignups.sort = this.sort;
    this.pendingEmpSignups.sort = this.sort;
  }

  approve(id: number): void {
    this.signupService.changeStatus(id, "Approved").subscribe({
      next: () => {
        this.snackBar.open('Form Approved!', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['snackbar-green']

        });
        this.selectedSignup = null;
        this.loadSignups(); // Reload the signups list
      },
      error: (err) => {
        this.snackBar.open('Approval Error', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
        console.error('Error changing status:', err);
      }
    });
  }

  reject(id: number): void {
    this.signupService.changeStatus(id, "Rejected").subscribe({
      next: () => {
        this.snackBar.open('Form Rejected!', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['snackbar-red']

        });
        this.selectedSignup = null;
        this.loadSignups();
      },
      error: (err) => {
        this.snackBar.open('Rejection Error', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
        console.error('Error changing status:', err);
      }
    });
  }

  goBack() {
    this.selectedSignup = null;
    this.loadSignups();
  }
  changeView() {
    if (this.isManager == true) {
      this.isManager = false
    }
    else {
      this.isManager = true;
    }
    this.loadSignups();
  }
}