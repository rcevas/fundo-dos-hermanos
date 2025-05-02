export function Header() {

  const header = document.createElement('header');

  header.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid px-lg-5">
        <a class="navbar-brand" href="#">Fundo Dos Hermanos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav fw-bold">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            <a class="nav-link" href="#">Quienes Somos</a>
            <a class="nav-link" href="#">Destino</a>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Servicios
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Caza</a></li>
                <li><a class="dropdown-item" href="#">Pesca</a></li>
              </ul>
            </li>              
            <a class="nav-link" href="#">Precio</a>
            <a class="nav-link" href="#">Contacto</a>
          </div>
        </div>
      </div>
    </nav>    
  `;

  return header;
}
