import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
}
export const ROUTES: RouteInfo[] = [
    
    { path: '/home', title: 'Home' },
    { path: '/user-profile', title: 'User Profile'},
    { path: '/events', title: 'Events & Conferences'},
    { path: '/request', title: 'Requests/Approvals'},
    { path: '/trip', title: 'Flights & Hotel' },
    { path: '/expenses', title: 'Expense Management'},
    { path: '/policy', title: 'Policy' },
];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  menuItems: any[] | undefined;

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
