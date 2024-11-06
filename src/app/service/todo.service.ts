import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _url:string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

Data(){
  return this.http.get(this._url);
}
}