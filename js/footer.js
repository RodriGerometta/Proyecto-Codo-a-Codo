let footer = `
    <div class=footer>
        <a href="index.html">
            <img width="60" class="logo" src="./Imagenes/logo.png" alt="Logo">
        </a>
        
        <nav>
        <a  href="https://api.whatsapp.com/send?phone=3794632153" target="_blank"  >
            <img width="30"  src="./imagenes/whatsapp.png" alt="logo whatsapp">
        </a>
        <a href="https://www.facebook.com/cafeteria.brig" target="_blank">
            <img width="30"   src="./imagenes/facebook.png" alt="logo facebook"> 
        </a>
        <a href="https://www.instagram.com/" target="_blank">
            <img width="30"   src="./imagenes/instagram (1).png" alt="logo instagram">
        </a>
        <a href="mailto:ejemplo@gmail.com" target="_blank">
            <img width="35"   src="./imagenes/correo-electronico-vacio.png" alt="logo correo">
        </a>
        </nav>
        <p>Sitio desarrollado en Codo a Codo </p>
    </div>
`;

//dos formas de cargar las etiquetas
// document.getElementById("contacto").innerHTML = cad;
document.querySelector("footer").innerHTML = footer;

<footer class="w-100 d-flex align-items justify-content-center flex-wrap bg-warning pt-5">
  <div class="text-center pt-3">
    <a href="https://www.instagram.com/">
      <i class="bi bi-instagram text-black text-center align-items-center "></i>
    </a>
    <a href="https://wwww.facebook.com/">
      <i class="bi bi-facebook text-black text-center align-items-center "></i>
    </a>
    <a href="https://web.whatsapp.com/">
      <i class="bi bi-whatsapp text-black text-center align-items-center "></i>
    </a>
    <p class="fs-5 pt-2 text-black text-center">
      LA Pizzeria © Todos Los Derechos Reservados 2023
    </p>
    <a
      class="fs-5 text-black text-center fw-semibold text-decoration-none"
      href=""
    >
      - NewGroup -
    </a>
  </div>
</footer>;
