
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user.model';

// interface User {
//   fullName: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   title: string;
//   department: string;
//   address: string;
//   postalCode: string;
//   city: string;
//   country: string;
//   emergencyContact: EmergencyContact;
//   notificationPreferences: NotificationPreferences;
// }

// export interface EmergencyContact {
//   name: string;
//   relationship: string;
//   phoneNumber: string;
// }

// export interface NotificationPreferences {
//   emailNotifications: boolean;
//   smsNotifications: boolean;
//   appNotifications: boolean;
// }

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private apiUrl = 'https://localhost:7197/api/User';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.apiUrl);
  }
   }
