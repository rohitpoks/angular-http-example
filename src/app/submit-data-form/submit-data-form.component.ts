import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataFetcherService } from '../data-fetcher.service';
import { SetServeService } from '../set-serve.service';
import { UpdateDataService } from '../update-data.service';

@Component({
  selector: 'app-submit-data-form',
  templateUrl: './submit-data-form.component.html',
  styleUrls: ['./submit-data-form.component.css'],
  providers: [DataFetcherService, SetServeService],
})
export class SubmitDataFormComponent implements OnInit {
  
  temp: number[] = [];

  constructor(private fb: FormBuilder, private fetch: DataFetcherService, private service: SetServeService, private send: UpdateDataService) {}

  ngOnInit(): void {
    this.service.update_set();
  }
  // arrow function, important! 
  checkId = (control: AbstractControl) => {
    let set = this.service.return_set();
    if (set.has(control?.value?.toString())) return {"duplicate":true};
    // console.log("returned true!");
    return null;
  };

  registrationForm = this.fb.group({
    id: ['', [Validators.required, this.checkId]],
    name: ['', [Validators.required]],
    age: ['', [Validators.required, this.checkAge]],
    sex: ['', Validators.required],
  });

  checkAge(control: AbstractControl) {
    if (control?.value >= 0 && control.value <= 50) return null;
    return { outOfRange: true };
  }

  get age() {
    return this.registrationForm.get('age');
  }

  get id() {
    return this.registrationForm.get('id');
  }

  get sex() {
    return this.registrationForm.get('sex');
  }

  get name() {
    return this.registrationForm.get('name');
  }

  onSubmit(values: any) {
    this.send.submitForm(values);
    this.service.update_set();
  }
}
