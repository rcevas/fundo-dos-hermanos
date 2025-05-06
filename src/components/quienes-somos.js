export function QuienesSomos() {
  const quienesSomos = document.createElement("section");
  quienesSomos.setAttribute("id", "quienes_somos");
  quienesSomos.classList.add("bg-light");

  quienesSomos.innerHTML = `
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 text-center text-lg-start">
          <h2 class="text-primary">Quienes Somos</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="col-lg-6 text-center">
          <img src="https://placehold.co/600x400" alt="About Us" class="img-fluid rounded shadow my-2">
        </div>
      </div>
    </div> 
  `;

  return quienesSomos;
}
