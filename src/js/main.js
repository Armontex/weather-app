import { initBtnActions } from "./components/action-btn.js";
import { initInputCoords } from "./components/input-coords.js";
import { createWeatherCard } from "./components/weather.js";

async function main() {
  const card = await createWeatherCard({
    bg_status: "sunny",
    status_icon: "/assets/media/icons/CLEARday.svg",
    status: "Ясно",
    temp_current: "30 °C",
    temp_feels: "По ощущениям 31°C",
    time: "16:00",
    date: "22 Июн 2025",
    location: "Екатеринбург, Россия",
    air_value: "8 км/ч",
    pressure_value: "760 мм рт. ст.",
    humidity_value: "50%",
  });

  document.querySelector("#root").appendChild(card);
}

main();

document.addEventListener("DOMContentLoaded", () => {
  initBtnActions();
  initInputCoords();
});
