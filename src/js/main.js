import { initBtnActions } from "./components/action-btn.js";
import { initAddBtn } from "./components/add-btn.js";
import { initInputCoords } from "./components/input-coords.js";
import { addWeatherCard } from "./utils/dom.js";
import { getCurrentPosition } from "./utils/navigator.js";

document.addEventListener("DOMContentLoaded", async () => {
  initAddBtn();
  initBtnActions();
  initInputCoords();

  let lat, lon;
  try {
    ({ lat, lon } = await getCurrentPosition());
  } catch (err) {
    console.error("Не удалось получить геопозицию:", err);
    lat = NaN;
    lon = NaN;
  }

  await addWeatherCard(lat, lon);
});
