export function Inicio() {

  const inicio = document.createElement('header');
  inicio.setAttribute("id", "inicio");

  inicio.innerHTML = `
    <div class="container text-white">
      <h1 class="display-3">Explora lo salvaje</h1>
      <p class="lead">Experiencias premium de caza y pesca</p>
      <a href="#contact" class="btn btn-outline-light btn-lg mt-4">Reserva ahora</a>
    </div> 
  `;

  return inicio;
}
