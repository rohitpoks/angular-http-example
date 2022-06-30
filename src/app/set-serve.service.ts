import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { DataFetcherService } from './data-fetcher.service';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root',
})
export class SetServeService {
  private set: Set<number>;
  constructor(private fetch: DataFetcherService) {this.set = new Set();}

  return_set() {
    return this.set;
  }

  update_set() {
    let temp: Employee[] = [];
    (this.fetch.returnEmployeeObservable()).subscribe (data => {
      temp = data; // this is asynchronous, may take time!
      for (let person of temp) {
        if (!this.set.has(person.id)) this.set.add(person.id);
      }
    });
  }
}
