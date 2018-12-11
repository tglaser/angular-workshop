import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MockComponent} from 'ng-mocks';
import {AppComponent} from './app.component';
import {HelloComponent} from './components/hello/hello.component';
import {Hello2Component} from './components/hello2/hello2.component';
import {Hello3Component} from './components/hello3/hello3.component';
import {Hello4Component} from './components/hello4/hello4.component';
import {WeatherComponent} from './components/weather/weather.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockComponent(HelloComponent),
        MockComponent(Hello2Component),
        MockComponent(Hello3Component),
        MockComponent(Hello4Component),
        MockComponent(WeatherComponent)
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
