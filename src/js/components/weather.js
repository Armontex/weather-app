import { addClass } from "../utils/dom.js";
import { loadTemplate } from "../utils/load-template.js";

async function initWeatherTemplate() {
  return await loadTemplate("../../../templates/weather.html");
}

export async function createWeatherCard(data) {
  let template = await initWeatherTemplate();

  const card = template.content.cloneNode(true);

  addClass(card.querySelector(".weather-main"), `weather-main--${data.bg_status}`)

  card.querySelector(".weather-status__icon").src = data.status_icon;
  card.querySelector(".weather-status__label").textContent = data.status;

  card.querySelector(".temp-current").textContent = data.temp_current;
  card.querySelector(".temp-feels").textContent = data.temp_feels;

  card.querySelector(".datetime__time").textContent = data.time;
  card.querySelector(".datetime__date").textContent = data.date;
  card.querySelector(".location__name").textContent = data.location;

  let airDetails = card.querySelector(".details-card--air");
  let pressureDetails = card.querySelector(".details-card--pressure");
  let humidityDetails = card.querySelector(".details-card--humidity");
  airDetails.querySelector(".details-card__value").textContent = data.air_value;
  pressureDetails.querySelector(".details-card__value").textContent = data.pressure_value;
  humidityDetails.querySelector(".details-card__value").textContent = data.humidity_value;

  return card;
}

export function updateWeaherCard(card, data) {
  const main = card.querySelector(".weather-main");

  main.className = "weather-main"; 
  main.classList.add(`weather-main--${data.bg_status}`);

  card.querySelector(".weather-status__icon").src = data.status_icon;
  card.querySelector(".weather-status__label").textContent = data.status;

  card.querySelector(".temp-current").textContent = data.temp_current;
  card.querySelector(".temp-feels").textContent = data.temp_feels;

  card.querySelector(".datetime__time").textContent = data.time;
  card.querySelector(".datetime__date").textContent = data.date;

  card.querySelector(".location__name").textContent = data.location;

  card.querySelector(".details-card--air .details-card__value").textContent = data.air_value;
  card.querySelector(".details-card--pressure .details-card__value").textContent = data.pressure_value;
  card.querySelector(".details-card--humidity .details-card__value").textContent = data.humidity_value;
}
