import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Match } from '../interfaces/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  list() : Observable<Match[]> {
    return this.http.get<Match[]>('https://bridge.buddyweb.fr/api/tutorials/matches')
  }
}
