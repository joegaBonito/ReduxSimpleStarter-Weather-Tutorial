import axios from 'axios';

const API_KEY = "6d06bfe9cce018e017a1509b04f2f07a";
const ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = ROOT_URL+"&q="+city+",us";
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
