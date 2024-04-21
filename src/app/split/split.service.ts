import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SplitService {
  httpClient = inject(HttpClient);
  constructor() {}

  saveSplitGroupData(splitGroupDetailData: { [key: string]: any }) {
    return this.httpClient.post<any>('/createGroup', splitGroupDetailData);
  }

  getGroup(){
    return this.httpClient.get('/group');
  }
}
