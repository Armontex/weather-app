export function inputValidation(value, type) {
  const number = parseFloat(String(value).replace(",", "."));
  if (!isNaN(number) && isFinite(number)) {
    if (type === "lat") return number >= -90 && number <= 90;
    if (type === "lon") return number >= -180 && number <= 180;
    console.error(`Неизвестный тип ${type}`);
  }
  return false;
}
