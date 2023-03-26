import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApixuService {

constructor(private http: HttpClient) {}

getWeather(location: string){
    return this.http.get(
      'https://weatherstack.com?key=6ee5383fff9d0c2833f618623e41a76f=' + location
    );
    }

  }