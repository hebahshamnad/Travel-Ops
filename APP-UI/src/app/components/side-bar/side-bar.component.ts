import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
}
export const ROUTES: RouteInfo[] = [
    
    { path: '/home', title: 'Home', icon: 'home' },
    { path: '/user-profile', title: 'My Profile', icon: 'person' },
    { path: '/events', title: 'Events Calendar', icon: 'event' },
    { path: '/approvals', title: 'Travel Approvals', icon: 'approval' },
    { path: '/travel', title: 'Travel Booking', icon: 'flight' },
    { path: '/expenses', title: 'Expense Claims', icon: 'account_balance_wallet' },
    { path: '/policy', title: 'Travel Policy', icon: 'policy' },
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
