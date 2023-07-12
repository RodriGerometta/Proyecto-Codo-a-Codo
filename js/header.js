// <!-- place navbar here -->

navbar = `
<h1 style="border: 2px solid grey">Shopping Codo a Codo</h1>
<nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container">
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href="index.html" aria-current="page"> <span class="visually-hidden">(current)</span>
                         <img width="65" class="logo-header" src="./Imagenes/logo.png" alt="Logo">
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="productos.html" aria-current="page">Produtos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">Action 2</a>
                </li>
            </ul>
            <form class="d-flex my-2 my-lg-0">
                <input class="form-control me-sm-2" type="text" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
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
