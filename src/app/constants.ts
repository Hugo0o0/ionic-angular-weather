import { City, FiveHoursWeather, Main, Weather, Wind } from './@types/types';

const defaultCityData: City = {
  id: 0,
  name: '',
  coord: {
    lon: 0,
    lat: 0,
  },
  country: '',
  population: 0,
  timezone: 0,
  sunrise: 0,
  sunset: 0,
};

const defaultWeatherData: Weather[] = [
  {
    id: 0,
    main: '',
    description: '',
    icon: '',
  },
];

const defaultMainData: Main = {
  temp: 0,
  grnd_level: 0,
  sea_level: 0,
  temp_kf: 0,
  temp_min: 0,
  temp_max: 0,
  pressure: 0,
  humidity: 0,
};

const defaultWindData: Wind = {
  speed: 0,
  deg: 0,
  gust: 0,
};

export const currentWeatherDefaultData = {
  coord: {
    lon: 0,
    lat: 0,
  },
  weather: defaultWeatherData,
  base: '',
  main: defaultMainData,
  visibility: 0,
  wind: defaultWindData,
  clouds: {
    all: 0,
  },
  dt: 0,
  sys: {
    type: 0,
    id: 0,
    country: '',
    sunrise: 0,
    sunset: 0,
  },
  timezone: 0,
  id: 0,
  name: '',
  cod: 0,
};

export const fiveHoursWeatherDefaultData: FiveHoursWeather = {
  city: defaultCityData,
  cnt: 0,
  cod: '',
  message: 0,
  list: [
    {
      clouds: {
        all: 0,
      },
      dt: 0,
      dt_txt: '',
      main: defaultMainData,
      pop: 0,
      sys: {
        pod: '',
      },
      visibility: 0,
      weather: defaultWeatherData,
      wind: defaultWindData,
    },
  ],
};
