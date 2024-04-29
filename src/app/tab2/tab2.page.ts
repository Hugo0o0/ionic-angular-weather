import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../api/weather.service';
import { CurrentWeather, FiveHoursWeather } from '../@types/types';
import {
  currentWeatherDefaultData,
  fiveHoursWeatherDefaultData,
} from '../constants';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  styles: ['.wind{transform:rotate(180deg)}'],
})
export class Tab2Page implements OnInit {
  constructor(private weatherService: WeatherService) {}
  icon: string = 'heart-outline';
  isLiked: boolean = false;
  currentWeather: CurrentWeather = currentWeatherDefaultData;
  fiveHoursWeather: FiveHoursWeather = fiveHoursWeatherDefaultData;
  humidity: number = 0;
  windSpeed: number = 0;
  lat: number = 0;
  lon: number = 0;
  async ngOnInit() {
    const location = await this.getCurrentLocation();
    this.lat = location.lat;
    this.lon = location.lon;
    this.getCurrentWeather();
    this.get5HoursWeather();
  }

  like() {
    if (this.isLiked) {
      this.icon = 'heart-outline';
      this.isLiked = false;
    } else {
      this.icon = 'heart';
      this.isLiked = true;
    }
  }

  getCurrentWeather() {
    const currentWeather = this.weatherService.getCurrentWeather(
      this.lat,
      this.lon
    );
    currentWeather.subscribe((data) => {
      this.currentWeather = data;
    });
  }
  get5HoursWeather() {
    this.weatherService
      .get5HoursWeather(this.lat, this.lon)
      .subscribe((data) => {
        this.fiveHoursWeather = data;
      });
  }

  public async getCurrentLocation() {
    const coords = await Geolocation.getCurrentPosition();
    return {
      lat: coords.coords.latitude,
      lon: coords.coords.longitude,
    };
  }
}
