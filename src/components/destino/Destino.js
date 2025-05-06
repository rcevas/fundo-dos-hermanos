export function Destino() {
  const destino = document.createElement("section");
  destino.setAttribute("id", "destino");

  fetch("/fundo-dos-hermanos/src/components/destino/Destino.html")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const content = doc.body.firstChild;
      destino.appendChild(content);
    })
    .catch((error) => console.error("Failed to load HTML file:", error));

  return destino;
}
