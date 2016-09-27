import axios from 'axios'

const API_KEY = 'f2914b65cc6e8ee43d367f0bf4751594'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const req = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: req
  }
}