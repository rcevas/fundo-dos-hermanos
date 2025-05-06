export function Contacto() {
  const contacto = document.createElement("section");
  contacto.setAttribute("id", "contacto");
  contacto.classList.add("bg-dark", "text-white", "bg-gradient");

  fetch("/fundo-dos-hermanos/src/components/contacto/Contacto.html")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const content = doc.body.firstChild;
      contacto.appendChild(content);
    })
    .catch((error) => console.error("Failed to load HTML file:", error));

  return contacto;
}
