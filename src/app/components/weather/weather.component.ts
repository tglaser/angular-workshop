import {Component, OnInit} from '@angular/core';
import {WeatherData} from '../../models/weather-data';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherData: WeatherData;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.weatherService.fetchWeatherData().subscribe((value: WeatherData) => this.weatherData = value);
  }

}
