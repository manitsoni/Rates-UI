import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Rate } from './rate';  
@Injectable({
  providedIn: 'root'
})
export class RateService {
  url = 'http://localhost:62475/Api/Rates';  
  constructor(private http: HttpClient) { }  
  getAllRate(): Observable<Rate[]> {  
    return this.http.get<Rate[]>(this.url + '/Get');  
  }  
  addRate(rate:Rate):Observable<Rate>{
    const httpOption = {headers : new HttpHeaders({
      'Content-Type':'application/json'
    })};
    return this.http.post<Rate>(this.url + '/Add',rate,httpOption);
  }
  deleteRate(Id : string):Observable<number>{
    const httpOption = { headers : new HttpHeaders({
      'Content-Type':'application/json'
    })};
    return this.http.delete<number>(this.url + '/DeleteRate?id='+Id,httpOption);
  }
}
