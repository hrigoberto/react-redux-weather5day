const API_KEY = '5c3b8acf089987c1a9a681f030fb3fcd';
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}
