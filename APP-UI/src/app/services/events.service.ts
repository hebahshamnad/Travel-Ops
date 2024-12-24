import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Event } from '../models/event.model';


@Injectable({
  providedIn: 'root'
})
export class EventsService {
 private apiUrl = 'https://localhost:7197/api/Event';

  constructor(private http: HttpClient) { }

  GetEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }
}
