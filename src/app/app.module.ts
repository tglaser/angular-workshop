import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { Hello2Component } from './components/hello2/hello2.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Hello2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
