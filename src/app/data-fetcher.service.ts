import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root',
})
export class DataFetcherService {

  constructor(private http: HttpClient) { }

  url : string = '/assets/data/employees.json'

  returnEmployeeObservable() {
    // return an observable of employees, need some component to subscribe to this observable to use it
    return this.http.get<Employee[]>(this.url);
  }
}
