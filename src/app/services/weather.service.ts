import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {WeatherData} from '../models/weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  fetchWeatherData():Observable<WeatherData>{
    return this.httpClient.get(
      'http://api.openweathermap.org/data/2.5/weather?q=Karlsruhe,de&units=metric'
    ).pipe(
      map(value => value['main'] as WeatherData)
    )
  }
}
