import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UpdateDataService {
  constructor(private http: HttpClient) {}
  url: string = 'some url';
  submitForm(values: any) {
    console.log(values);
  }
  actualSubmitForm(values: any) {
    this.http.post(this.url, values).subscribe();
    // post method automatically converts values to a JSON, need to subscribe else won't make http request, this post request returns a response
  }
}
