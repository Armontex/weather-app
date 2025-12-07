import { toggleClass, addWeatherCard } from "../utils/dom.js";

export function initAddBtn() {
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest(".btn-add");
    if (!btn) return;
    await addWeatherCard(NaN, NaN);
    toggleClass(btn, "active");
  });
}
