import { addClass, hasClass, removeClass } from "../utils/dom.js";
import { inputValidation } from "../validation/input-coords-validation.js";

export function initInputCoords() {
  document.addEventListener("input", (e) => {
    const input = e.target.closest(".coord-input__field");
    if (!input) return;

    let value = input.value;
    const type = hasClass(input, "coord-input__field--lon") ? "lon" : "lat";

    if (!inputValidation(value, type)) {
      addClass(input, "error");
      return;
    }

    if (hasClass(input, "error")) removeClass(input, "error");

    value = parseFloat(value);

    // TODO: setTimeout 3s на поиск
  });
}
