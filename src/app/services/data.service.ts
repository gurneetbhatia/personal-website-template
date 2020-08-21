import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competition } from '../pages/competitions/competition';
import { competitions } from '../common/data';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  }),
  responseType: 'text' as 'json'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getGitStats(username: string): Observable<string> {
    const githubQuery = `https://cors-anywhere.herokuapp.com/https://github-readme-stats.vercel.app/api?username=${username}&count_private=true&show_icons=true&hide_border=true&theme=buefy&hide_rank=true`;
    
    return this.http.get<string>(githubQuery, httpOptions);
  }

  getCompetitions(): Competition[] {
    return competitions;
  }
}
