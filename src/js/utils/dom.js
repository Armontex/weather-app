import { createWeatherCard } from "../components/weather.js";
import { generateWeaherData } from "./generate-weather-data.js";

export const toggleClass = (el, cls) => el.classList.toggle(cls);
export const addClass = (el, cls) => el.classList.add(cls);
export const removeClass = (el, cls) => el.classList.remove(cls);
export const hasClass = (el, cls) => el.classList.contains(cls);

export async function addWeatherCard(lat, lon) {
  const data = await generateWeaherData(lat, lon);
  const card = await createWeatherCard(data);
  document.querySelector("#root").appendChild(card);
}
