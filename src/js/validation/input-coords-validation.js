export function inputValidation(value, type) {
  const normalized = String(value).replace(",", ".");
  if (!isNaN(parseFloat(normalized)) && isFinite(normalized)) {
    const number = parseFloat(normalized);
    if (type === "lat") return number >= -90 && number <= 90;
    else if (type === "lon") return number >= -180 && number <= 180;
    console.error(`Неизвестный тип ${type}`);
  }
  return false;
}
