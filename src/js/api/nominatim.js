export async function getLocation(lat, lon) {
  const params = new URLSearchParams({
    lat: lat,
    lon: lon,
    "accept-language": "ru",
    format: "json",
  });

  const url = `https://nominatim.openstreetmap.org/reverse?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP Error: ${url}`);
  const data = await res.json();
  return data;
}
