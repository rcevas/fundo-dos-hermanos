export function Servicios() {
  const servicios = document.createElement("section");
  servicios.setAttribute("id", "servicios");

  servicios.innerHTML = `
    <div class="container">
      <h2 class="text-center text-primary mb-5">Servicios</h2>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card h-100 shadow text-white shadow">
            <img
              src="https://placehold.co/400x700"
              class="card-img"
              alt="Expediciones de caza"
            />
            <div class="card-img-overlay text-center">
              <h3 class="card-title">Expediciones de caza</h3>
              <p class="card-text">
                Experiencia casi exclusivamente a la caza de ciervo rojo (Cervus
                Elaphus) en distintos ambientes que nos ofrecen los dominios de
                Fundo Dos Hermanos con extensos valles abiertos, bosques de lengas
                en altura con escaso sotobosque así como sectores de fachinales y
                quebradas.
              </p>
              <p class="card-text">
                En donde el visitante podrá experimentar los distintos métodos de
                caza según su experiencia para lo cual se cuenta con la asistencia
                de nuestro guía local con años de experiencia en la caza mayor y
                conocedor de la zona.
              </p>
              <p class="card-text">
                También se cuenta con la asistencia de caballares para la logística
                y traslado de sus presas siendo el lugar de pernoctación un puesto
                de altura equipado para el descanso pre y post jornada de caza
                situado en medio del Valle Los Cabezas a pasos de arrollo la
                veranada y Laguna Azucena.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card h-100 shadow text-white shadow">
            <img
              src="https://placehold.co/400x400"
              class="card-img"
              alt="Expediciones de pesca"
            />
            <div class="card-img-overlay text-center">
              <h3 class="card-title">Expediciones de pesca</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return servicios;
}
