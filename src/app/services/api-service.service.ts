import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interface } from '../models/interface';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private httpclient: HttpClient) {}

  getData() {
     return this.httpclient.get<Interface>("https://jsonplaceholder.typicode.com/users");
  }
}
