import {of} from 'rxjs';

import {WeatherService} from './weather.service';

fdescribe('WeatherService', () => {


  it('should call http client', (done) => {
    const httpClientMock = jasmine.createSpyObj('httpClientMock', ['get']);
    httpClientMock.get.and.returnValue(of({main: {temp: 3.33, temp_min: 1, temp_max: 8}}));


    const service: WeatherService = new WeatherService(httpClientMock);

    const weatherDataObservable = service.fetchWeatherData();
    expect(httpClientMock.get).toHaveBeenCalledWith(
      'http://api.openweathermap.org/data/2.5/weather?q=Karlsruhe,de&units=metric'
    );

    weatherDataObservable.subscribe(value => {
      expect(value.temp).toEqual(3.33);
      done();
    });

  });
});
