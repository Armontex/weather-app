import { addClass, removeClass } from "../utils/dom.js";
export function showMapCard(card) {
  const details = card.querySelector(".weather-details");
  for (const child of details.children) {
    addClass(child, "hidden");
  }
  const lat = parseFloat(card.querySelector(".coord-input__field--lat").value);
  const lon = parseFloat(card.querySelector(".coord-input__field--lon").value);

  const mapSlot = card.querySelector(".map-slot");
  mapSlot.innerHTML = `
    <iframe
      width="100%"
      height="100%"
      frameborder="0"
      scrolling="no"
      src="https://www.openstreetmap.org/export/embed.html?layer=mapnik&marker=${lat},${lon}&zoom=13">
    </iframe>
  `;
  addClass(details, "weather-details--map-active");
  removeClass(mapSlot, "hidden");
}

export function hideMapCard(card) {
  const details = card.querySelector(".weather-details");
  for (const child of details.children) {
    removeClass(child, "hidden");
  }

  const mapSlot = card.querySelector(".map-slot");
  removeClass(details, "weather-details--map-active");
  addClass(mapSlot, "hidden");
}
