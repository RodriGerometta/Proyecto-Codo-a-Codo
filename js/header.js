// <!-- place navbar here -->

navbar = `
    <h1 style="border: 2px solid grey">Shopping Codo a Codo</h1>
    <nav class="navbar navbar-expand-lg p-3 fw-medium fs-5">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#barra" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="barra">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                        <a href="index.html">
                            <img width="65" class="logo" src="./Imagenes/logo.png" alt="Logo">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="aheader nav-link text-black" href="nosotros.html">Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="aheader nav-link text-black" href="sucursales.html">Sucursales</a>
                    </li>
                    <li class="nav-item">
                        <a class="aheader nav-link active text-black" aria-current="page" href="contacto.html">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

document.querySelector("header").innerHTML = navbar;

// <nav style="display: flex;">
//     <a  href="index.html">
//         <img width="65" class="logo" src="./Imagenes/logo.png" alt="Logo">
//     <a class="aheader"  href="nosotros.html">Nosotros</a>
//     <a class="aheader"  href="sucursales.html">Sucursales</a>
//     <a class="aheader"  href="contacto.html">Contacto</a>

// </nav>
