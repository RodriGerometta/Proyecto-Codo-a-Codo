let card = `
<div class="cards">
`;
for (let elemento of data) {
  card =
    card +
    `
        <div class="card">
            <img class="imagenCard" src= ${elemento.image} alt=${elemento.description}>
            <h2>${elemento.title}</h2>
            <p>Precio: ${elemento.price}</p>
        </div>
    `;
}

card = card + `
</div>`
console.log(card);
document.querySelector("main").innerHTML = card;

// let cad = ``;
// for (let elemento of fotos) {
//   cad = cad + `<img src= ${elemento} alt="Foto">
//   `;
// }
// document.querySelector("main").innerHTML=cad
