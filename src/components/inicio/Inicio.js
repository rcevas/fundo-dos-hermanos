export function Inicio() {
  const inicio = document.createElement("header");
  inicio.setAttribute("id", "inicio");

  fetch("/fundo-dos-hermanos/src/components/inicio/Inicio.html")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const content = doc.body.firstChild;
      inicio.appendChild(content);
    })
    .catch((error) => console.error("Failed to load HTML file:", error));

  return inicio;
}
