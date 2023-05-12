function obtener(num) {
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(res => {  //EN ESTE MOMENTO YA OBTUVO LOS DATOS 
    console.log(res)
    contenido=`
    <img src="${res.results[0].picture.large}" width="80px">
    <p>Nombre: ${res.results[0].name.first}</p>
    <p>Mail: ${res.results[0].name.last}</p>`
    document.querySelector(`.f${num}`).innerHTML = contenido;
    })

}

obtener(1)
obtener(2)
obtener(3)