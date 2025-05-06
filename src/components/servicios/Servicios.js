export function Servicios() {
  const servicios = document.createElement("section");
  servicios.setAttribute("id", "servicios");

  fetch("/fundo-dos-hermanos/src/components/servicios/Servicios.html")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const content = doc.body.firstChild;
      servicios.appendChild(content);
    })
    .catch((error) => console.error("Failed to load HTML file:", error));

  return servicios;
}
