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
  
  constructor(private userService: UserProfileService) { }


  ngOnInit(): void {
    
    this.userService.getUsers().subscribe(data => {
      
      this.dataSource = data;
      console.log(this.dataSource)
      
    });
  }
  

}
