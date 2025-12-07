import { createWeatherCard } from "../components/weather.js";
import { generateWeaherData } from "./generate-weather-data.js";

export const toggleClass = (el, cls) => el.classList.toggle(cls);
export const addClass = (el, cls) => el.classList.add(cls);
export const removeClass = (el, cls) => el.classList.remove(cls);
export const hasClass = (el, cls) => el.classList.contains(cls);

export async function addWeatherCard(lat, lon) {
  const data = await generateWeaherData(lat, lon);
  const cardFragment = await createWeatherCard(data);
  const root = document.querySelector("#root");
  root.appendChild(cardFragment);

  const card = root.lastElementChild;
  return card;
}
