import { Component,OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent  implements OnInit{
  dataSource: User| null = null;
  isManager: boolean = false; // Track if the view is for a manager
  
  constructor(private userService: UserProfileService) { }

  switchView(): void {
    this.isManager = !this.isManager; // Toggle the view
    this.loadUser(); // Load the user based on the current view
  }

  ngOnInit(): void {
    this.loadUser(); // Load the user on initialization
  }

  private loadUser(): void {
    const userId = this.isManager ? 11 : 1; // Use 11 for manager, 1 for employee
    this.userService.getUser(userId).subscribe(data => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }
}
