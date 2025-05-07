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

  nav.innerHTML = `
    <div class="container">
      <a class="navbar-brand" href="#">Fundo Dos Hermanos</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#inicio">Inicio</a></li>
          <li class="nav-item">
            <a class="nav-link" href="#quienes_somos">Quienes Somos</a>
          </li>
          <li class="nav-item"><a class="nav-link" href="#destino">Destino</a></li>
          <li class="nav-item">
            <a class="nav-link" href="#servicios">Servicios</a>
          </li>
          <li class="nav-item"><a class="nav-link" href="#precios">Precios</a></li>
          <li class="nav-item">
            <a class="nav-link" href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  `;

  return nav;
}
