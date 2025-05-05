export function Servicios() {
  const servicios = document.createElement("section");
  servicios.setAttribute("id", "servicios");
  /*   servicios.classList.add("bg-light"); */

  servicios.innerHTML = `
    <div class="container">
      <h2 class="text-center mb-5">Servicios</h2>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card h-100 shadow bg-dark text-white">
            <img src="https://placehold.co/400x400" class="card-img" alt="...">
            <div class="card-img-overlay text-center">
              <h3 class="card-title">Expediciones de caza</h3>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
            </div>
          </div>
        </div>
        <div class="col-lg-6"> 
          <div class="card h-100 shadow bg-dark text-white">
            <img src="https://placehold.co/400x400" class="card-img" alt="...">
            <div class="card-img-overlay text-center">
              <h3 class="card-title">Expediciones de pesca</h3>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return servicios;
}
