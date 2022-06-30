import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { HttpClientModule } from '@angular/common/http';
import { SubmitDataFormComponent } from './submit-data-form/submit-data-form.component';
import { DataFetcherService } from './data-fetcher.service';

@NgModule({
  declarations: [AppComponent, DisplayDataComponent, SubmitDataFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [DataFetcherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
