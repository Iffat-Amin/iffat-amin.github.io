import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Launch } from '../models/launch.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getAllLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.baseUrl);
  }

  getLaunchesByYear(year: string): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.baseUrl}?launch_year=${year}`);
  }

  getLaunchByFlightNumber(flightNumber: number): Observable<Launch> {
    return this.http.get<Launch>(`${this.baseUrl}/${flightNumber}`);
  }
}
