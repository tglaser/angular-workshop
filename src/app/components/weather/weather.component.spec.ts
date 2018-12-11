import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {WeatherData} from '../../models/weather-data';
import {WeatherService} from '../../services/weather.service';

import {WeatherComponent} from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let weatherService;

  beforeEach(async(() => {

    weatherService = jasmine.createSpyObj('weatherServiceMock', ['fetchWeatherData']);

    const mockResponse = of({temp: 3.33, temp_min: 1, temp_max: 8} as WeatherData);
    weatherService.fetchWeatherData.and.returnValue(mockResponse);

    TestBed.configureTestingModule({
      declarations: [WeatherComponent],
      providers: [
        {provide: WeatherService, useValue: weatherService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call weather service and bind data',()=>{
    expect(component.weatherData).toBeTruthy();
    expect(component.weatherData.temp).toEqual(3.33);
    expect(component.weatherData.temp_min).toEqual(1);
    expect(component.weatherData.temp_max).toEqual(8);

    expect(weatherService.fetchWeatherData).toHaveBeenCalled()
  });
});
