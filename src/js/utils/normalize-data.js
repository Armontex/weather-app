import {
  RU_WEATHER_CODES,
  WEAHER_CODES_TO_ICON,
  WEATHER_CODES_TO_BG_STATUS,
} from "../constants/weather-codes.js";

const PRESSURE_COEF = 0.75;

export function normalizeDateTime(data) {
  const dateObj = new Date(data.current.time);
  const time =
    dateObj.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    }) + ` (${data.timezone_abbreviation})`;
  const date = dateObj.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const dateParts = date.split(" ");
  dateParts[1] = dateParts[1][0].toUpperCase() + dateParts[1].slice(1);
  const formattedDate = dateParts.join(" ");

  return {
    time: time,
    date: formattedDate,
  };
}

export function normalizeWeatherData(data) {
  const { time, date } = normalizeDateTime(data);
  return {
    bg_status: WEATHER_CODES_TO_BG_STATUS[data.current.weather_code],
    status_icon: WEAHER_CODES_TO_ICON[data.current.weather_code],
    status: RU_WEATHER_CODES[data.current.weather_code],
    temp_current: `${Math.round(data.current.temperature_2m)} ${
      data.current_units.temperature_2m
    }`,
    temp_feels: `По ощущениям ${Math.round(
      data.current.apparent_temperature
    )} ${data.current_units.apparent_temperature}`,
    time: time,
    date: date,
    air_value: `${Math.round(data.current.wind_speed_10m)} км/ч`,
    pressure_value: `${Math.round(
      data.current.surface_pressure * PRESSURE_COEF
    )} мм рт. ст.`,
    humidity_value: `${data.current.relative_humidity_2m}%`,
  };
}

export function normalizeLocationData(data) {
  const addr = data.address || {};
  const city = addr.city || addr.town || addr.village || addr.county;
  const country = addr.country || "";

  if (city) {
    return `${city.length <= 20 ? city : city.slice(0, 20) + '...' }, ${country}`;
  } else {
    return country;
  }
}
