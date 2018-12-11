import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {WeatherData} from '../../models/weather-data';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherData: WeatherData;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.httpClient.get(
      'http://api.openweathermap.org/data/2.5/weather?q=Karlsruhe,de&units=metric&APPID=faf17d6bfe1477a97755d5134779e59c'
    ).pipe(
      map(value => value['main'] as WeatherData)
    ).subscribe((value: WeatherData) => this.weatherData = value);
  }

}
