import { hasClass, addClass, removeClass } from "../utils/dom.js";

export function initBtnActions() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".action-btn");
    if (!btn || hasClass(btn, "active")) return;

    const wrapper = btn.closest(".weather-actions");

    const infoBtn = wrapper.querySelector(".action-btn--info");
    const mapBtn = wrapper.querySelector(".action-btn--map");

    removeClass(infoBtn, "active");
    removeClass(mapBtn, "active");

    addClass(btn, "active");
  });
}
