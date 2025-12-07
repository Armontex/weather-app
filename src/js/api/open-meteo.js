export async function getWeather(lat, lon) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    timezone: "auto",
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "surface_pressure",
      "wind_speed_10m",
      "weather_code",
    ],
  });
  const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP Error: ${url}`);
  const data = await res.json();
  return data;
}
