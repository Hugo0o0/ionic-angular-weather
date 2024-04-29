import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentWeather, FiveHoursWeather } from '../@types/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly apiKey = environment.apiKey;
  private readonly currentWeatherUri = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=tr&appid=${this.apiKey}`;
  constructor(private http: HttpClient) {}

  public getCurrentWeather(
    lat: number,
    lon: number
  ): Observable<CurrentWeather> {
    return this.http.get<CurrentWeather>(
      `${this.currentWeatherUri}&lat=${lat}&lon=${lon}`
    );
  }

  public get5HoursWeather(
    lat: number,
    lon: number
  ): Observable<FiveHoursWeather> {
    const uri = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lang=tr&appid=${this.apiKey}&lat=${lat}&lon=${lon}`;
    return this.http.get<FiveHoursWeather>(uri);
  }
}
