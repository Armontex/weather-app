export async function loadTemplate(path) {
  const html = await fetch(path).then((r) => r.text());

  const container = document.createElement("div");
  container.innerHTML = html.trim();

  return container.querySelector("template");
}
