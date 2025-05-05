export function NavBar() {

  const nav = document.createElement('nav');
  nav.classList.add("navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top");

  nav.innerHTML = `
      <div class="container">
        <a class="navbar-brand" href="#">Fundo Dos Hermanos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#home">Inicio</a></li>
            <li class="nav-item"><a class="nav-link" href="#about">Quienes Somos</a></li>
            <li class="nav-item"><a class="nav-link" href="#location">Destino</a></li>

            <!-- Dropdown Menu for Services -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#services" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Servicios
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="servicesDropdown">
                <li><a class="dropdown-item" href="#services">Caza</a></li>
                <li><a class="dropdown-item" href="#services">Pesca</a></li>
              </ul>
            </li>

            <li class="nav-item"><a class="nav-link" href="#pricing">Precio</a></li>
            <li class="nav-item"><a class="nav-link" href="#contact">Contacto</a></li>
          </ul>
        </div>
      </div>
  `;

  return nav;
}
