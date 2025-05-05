export function Footer() {
  const footer = document.createElement("footer");
  footer.classList.add("bg-black", "text-light", "text-center", "p-3");

  footer.innerHTML = `
    <small>© 2025 Fundo Dos Hermanos. All rights reserved.</small>
  `;

  return footer;
}
