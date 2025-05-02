export function Inicio() {

  const inicio = document.createElement('div');

  inicio.innerHTML = `

    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://placehold.co/1920x720" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h1>First slide label</h1>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
    </div>
 
  `;


  return inicio;
}
