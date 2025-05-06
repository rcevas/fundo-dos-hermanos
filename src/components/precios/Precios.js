export function Precios() {
  const precios = document.createElement("section");
  precios.setAttribute("id", "precios");
  precios.classList.add("bg-light");

  fetch("/fundo-dos-hermanos/src/components/precios/Precios.html")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const content = doc.body.firstChild;
      precios.appendChild(content);
    })
    .catch((error) => console.error("Failed to load HTML file:", error));

  return precios;
}
