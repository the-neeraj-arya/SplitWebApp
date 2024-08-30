import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.post<any>('/createGroup', splitGroupDetailData);
  }

  getGroup() {
    return this.httpClient.get('/group');
  }

  getData(): Observable<string> {
    return this.http.get(this.baseUrl, { responseType: 'text' });
  }
}