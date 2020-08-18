import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, WeatherComponent ],
  providers: [ WeatherService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
