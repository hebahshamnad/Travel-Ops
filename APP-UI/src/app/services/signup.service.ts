import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from '../models/signup.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'https://localhost:7197/api/Signup';

  constructor(private http: HttpClient) { }

  getSignups(): Observable<Signup[]> {
    return this.http.get<Signup[]>(`${this.apiUrl}/GetSignups`);
  }

  addSignup(signup: Signup): Observable<Signup> {
    return this.http.post<Signup>(`${this.apiUrl}/AddSignup`, signup);
  }
  changeStatus(id: number, status: string): Observable<void> {
    const params = { id: id.toString(), status }; // Pass id and status as query parameters
    return this.http.put<void>(`${this.apiUrl}/ChangeStatus`, null, { params });
  }

  getEventCost(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetEventCost`);
  }
  GetCostPerPerson(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetCostPerPerson`);
  }
}