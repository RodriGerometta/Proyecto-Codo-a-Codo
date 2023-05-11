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
