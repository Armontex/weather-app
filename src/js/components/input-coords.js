import { addClass, hasClass, removeClass } from "../utils/dom.js";
import { generateWeaherData } from "../utils/generate-weather-data.js";
import { inputValidation } from "../validation/input-coords-validation.js";
import { updateWeaherCard } from "./weather.js";

export function initInputCoords() {
  document.addEventListener("input", async (e) => {
    const currentInput = e.target.closest(".coord-input__field");
    if (!currentInput) return;

    let currentValue = currentInput.value;
    const currentType = hasClass(currentInput, "coord-input__field--lon")
      ? "lon"
      : "lat";

    if (!inputValidation(currentValue, currentType)) {
      addClass(currentInput, "error");
      return;
    }

    if (hasClass(currentInput, "error")) removeClass(currentInput, "error");

    currentValue = parseFloat(currentValue);

    //

    const coordsInput = currentInput.parentElement.parentElement;
    const otherType = currentType === "lat" ? "lon" : "lat";
    const otherInput = coordsInput.querySelector(
      `.coord-input__field--${otherType}`
    );
    let otherValue = otherInput.value;

    if (!inputValidation(otherValue, otherType)) {
      return;
    }
    
    otherValue = parseFloat(otherValue);
    const currentCard = coordsInput.closest(".weather__content");
    const newData =
      currentType === "lat"
        ? await generateWeaherData(currentValue, otherValue)
        : await generateWeaherData(otherValue, currentValue);
    updateWeaherCard(currentCard, newData);
  });
}
