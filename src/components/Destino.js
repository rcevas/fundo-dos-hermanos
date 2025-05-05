export function Destino() {

  const destino = document.createElement('section');
  destino.setAttribute("id", "destino");

  destino.innerHTML = `
    <div class="container">
      <h2 class="text-center mb-4">Destino</h2>
      <p class="text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div class="row align-items-center ">
        <div class="col-lg-6 text-center">
          <img src="https://placehold.co/600x400" alt="About Us" class="img-fluid rounded my-2">
        </div>
        <div class="col-lg-6 text-center text-lg-start"> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 text-center text-lg-start my-3">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="col-lg-6 text-center my-3">
          <img src="https://placehold.co/600x400" alt="About Us" class="img-fluid rounded">
        </div>
      </div>
    </div>
    <div id="carousel_destino" class="carousel slide mt-5" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://placehold.co/1920x800" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://placehold.co/1920x800" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://placehold.co/1920x800" class="d-block w-100" alt="...">
        </div>
      </div>
    </div>
  `;

  return destino;
}
