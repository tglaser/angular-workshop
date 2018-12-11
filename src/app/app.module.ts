import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloComponent} from './components/hello/hello.component';
import {Hello2Component} from './components/hello2/hello2.component';
import {NameInputComponent} from './components/name-input/name-input.component';
import {Hello3Component} from './components/hello3/hello3.component';
import {Hello4Component} from './components/hello4/hello4.component';
import {ForbiddenNameValidatorDirective} from './directives/forbidden-name-validator.directive';
import {WeatherComponent} from './components/weather/weather.component';
import {AppIdInterceptor} from './interceptors/app-id.interceptor';
import {WeatherService} from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Hello2Component,
    NameInputComponent,
    Hello3Component,
    Hello4Component,
    ForbiddenNameValidatorDirective,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppIdInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
