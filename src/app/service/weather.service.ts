import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private _url:string = "https://date.nager.at/api/v3/PublicHolidays/2024/CH";

  constructor(private http: HttpClient) { }

users(){
  return this.http.get(this._url);
}
}