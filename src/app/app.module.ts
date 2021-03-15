import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RateService } from '../app/rate.service';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { RatepageComponent } from './ratepage/ratepage.component';

@NgModule({
  declarations: [
    AppComponent,
    RatepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
