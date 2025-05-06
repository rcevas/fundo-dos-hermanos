export function NavBar() {
  const nav = document.createElement("nav");
  nav.classList.add(
    "navbar",
    "navbar-expand-lg",
    "navbar-dark",
    "bg-dark",
    "bg-gradient",
    "fixed-top"
  );

  fetch("/fundo-dos-hermanos/src/components/navbar/NavBar.html")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const content = doc.body.firstChild;
      nav.appendChild(content);
    })
    .catch((error) => console.error("Failed to load HTML file:", error));

  return nav;
}
