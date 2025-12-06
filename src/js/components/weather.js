import { loadTemplate } from '../utils/loadTemplate.js';

async function initWeatherTemplate() {
  return await loadTemplate('/templates/weather.html');
}

export async function createWeatherCard(data) {
  let template = await initWeatherTemplate();

  const card = template.content.cloneNode(true);

  card.querySelector('.weather-status__label').textContent = data.status;
  card.querySelector('.temp-current').textContent = data.temp;
  card.querySelector('.temp-feels').textContent = data.feels;

  return card;
}
