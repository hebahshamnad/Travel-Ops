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
}