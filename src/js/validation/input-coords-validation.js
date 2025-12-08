export function inputValidation(value, type) {
  const normalized = String(value).replace(",", ".");
  const number = Number(normalized);

  if (!Number.isFinite(number)) return false;
  if (String(number) !== normalized) return false;

  if (type === "lat") return number >= -90 && number <= 90;
  if (type === "lon") return number >= -180 && number <= 180;

  console.error(`Неизвестный тип ${type}`);
  return false;
}
