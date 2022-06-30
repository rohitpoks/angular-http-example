import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataFetcherService } from '../data-fetcher.service';
@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private fetch: DataFetcherService) {}

    ngOnInit() {
    // subscribe to observable
    (this.fetch.returnEmployeeObservable()).subscribe(
      (data) => (this.employees = data)
    );
    // function takes in data and assigns it to employees
    // when this component is created, the employees array will be ready

  }
  
}
