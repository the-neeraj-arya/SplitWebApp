import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SplitService {

  httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  saveSplitGroupData(splitGroupDetailData: { [key: string]: any }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<any>('http://localhost:8080/group/createGroup', JSON.stringify(splitGroupDetailData), { headers });
  }

  getGroup() {
    return this.httpClient.get('/group');
  }

  getData(): Observable<string> {
    return this.http.get(this.baseUrl, { responseType: 'text' });
  }
}