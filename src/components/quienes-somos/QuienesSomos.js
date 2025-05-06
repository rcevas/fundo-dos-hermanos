export function QuienesSomos() {
  const quienesSomos = document.createElement("section");
  quienesSomos.setAttribute("id", "quienes_somos");
  quienesSomos.classList.add("bg-light");

  fetch("/fundo-dos-hermanos/src/components/quienes-somos/QuienesSomos.html")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const content = doc.body.firstChild;
      quienesSomos.appendChild(content);
    })
    .catch((error) => console.error("Failed to load HTML file:", error));

  return quienesSomos;
}
