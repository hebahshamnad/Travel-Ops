import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Claim } from '../models/claim.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  private apiUrl = 'https://localhost:7197/api/Claim';
  constructor(private http:HttpClient) { }

  GetClaimList(): Observable<Claim[]> {
      return this.http.get<Claim[]>(this.apiUrl);
    }
}
