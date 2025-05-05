export function Inicio() {
  const inicio = document.createElement("header");
  inicio.setAttribute("id", "inicio");

  inicio.innerHTML = `
    <div class="container text-white">
      <p class="display-6">TURISMO CINEGÉTICOEN LA PATAGONIA CHILENA</p>
      <p class="display-6">Explora lo salvaje</p>
      <p class="lead">Experiencias premium de caza y pesca</p>
      <a href="#contacto" class="btn btn-outline-light btn-lg mt-4">Reservar ahora</a>
    </div> 
  `;

  return inicio;
}
