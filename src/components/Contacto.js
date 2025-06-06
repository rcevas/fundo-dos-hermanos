export function Contacto() {
  const contacto = document.createElement("section");
  contacto.setAttribute("id", "contacto");
  contacto.classList.add("bg-dark", "text-white", "bg-gradient");

  contacto.innerHTML = `
    <div class="container">
      <div class="row g-3">
        <div class="col-lg-6 text-center text-lg-start mb-4">
          <h2 class="mb-3">Contacto</h2>
          <span><i class="bi bi-geo-alt"></i></span>
          <span class="ms-2">Villa Mañihuales, Aysén, Chile</span><br />
          <span><i class="bi bi-telephone"></i></span>
          <a class="ms-2 text-white text-decoration-none" href="tel:+56000000000"
            >+56 000000000</a
          ><br />
          <span><i class="bi bi-envelope-at"></i></span>
          <a
            class="ms-2 text-white text-decoration-none"
            href="mailto:fundodoshermanos@gmail.com"
            >fundodoshermanos@gmail.com</a
          >
        </div>
        <div class="col-lg-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22501.361211256622!2d-72.17508550989648!3d-45.173528894521745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdf315da82e2d6f3%3A0x68b0470258a36370!2zVmlsbGEgTWHDsWlodWFsZXMsIEF5c8OpbiwgQ2hpbGU!5e0!3m2!1ses!2ses!4v1746440601853!5m2!1ses!2ses"
            width="100%"
            height="200"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  `;

  return contacto;
}
