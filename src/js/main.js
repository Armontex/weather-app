import { getCurrentPosition } from "./utils/navigator.js";
import { generateWeatherCard } from "./utils/weather-data.js";

async function main() {
  try {
    const { lat, lon } = await getCurrentPosition();
    const card = await generateWeatherCard(lat, lon);
    document.querySelector("#root").appendChild(card);
  } catch (err) {
    console.error("Не удалось получить геопозицию:", err);
    const lat = NaN;
    const lon = NaN;

    const card = await generateWeatherCard(lat, lon);
    document.querySelector("#root").appendChild(card);
  }
}

main();
