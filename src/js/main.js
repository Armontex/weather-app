import { createWeatherCard } from "./components/weather.js";

async function main() {
  const card = await createWeatherCard({
    status: "Ясно",
    temp: "29 °C",
    feels: "25 °C",
  });

  document.querySelector("#root").appendChild(card);
}

main();
