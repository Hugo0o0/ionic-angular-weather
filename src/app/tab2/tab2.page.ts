import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../api/weather.service';
import { CurrentWeather, FiveHoursWeather } from '../@types/types';
import {
  currentWeatherDefaultData,
  fiveHoursWeatherDefaultData,
} from '../constants';

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
  async ngOnInit() {
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
    const lat = '41.092429';
    const lon = '28.8614284';
    const currentWeather = this.weatherService.getCurrentWeather(lat, lon);
    currentWeather.subscribe((data) => {
      this.currentWeather = data;
    });
  }
  get5HoursWeather() {
    this.weatherService
      .get5HoursWeather('41.092429', '28.8614284')
      .subscribe((data) => {
        this.fiveHoursWeather = data;
        console.log(data);
      });
  }
}
