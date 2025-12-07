import { getLocation } from "../api/nominatim.js";
import { getWeather } from "../api/open-meteo.js";
import { NOT_DATA } from "../constants/not-data.js";
import { normalizeLocationData, normalizeWeatherData } from "./normalize-data.js";

export async function generateWeaherData(lat, lon) {
  if (isNaN(lat) || isNaN(lon)) {
    return NOT_DATA;
  }

  const weatherData = await getWeather(lat, lon);
  const locationData = await getLocation(lat, lon);

  const normalizeWeather = normalizeWeatherData(weatherData);
  const normalizeLocation = normalizeLocationData(locationData);

  return {
    bg_status: normalizeWeather.bg_status,
    status_icon: normalizeWeather.status_icon,
    status: normalizeWeather.status,
    temp_current: normalizeWeather.temp_current,
    temp_feels: normalizeWeather.temp_feels,
    time: normalizeWeather.time,
    date: normalizeWeather.date,
    location: normalizeLocation,
    air_value: normalizeWeather.air_value,
    pressure_value: normalizeWeather.pressure_value,
    humidity_value: normalizeWeather.humidity_value,
  };
}
