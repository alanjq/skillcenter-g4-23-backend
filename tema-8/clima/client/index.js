function obtenerClima(ciudad) {
    fetch(`http://localhost:3000/weather/${ciudad}`)
        .then(r => r.json())
        .then((data) => {
            console.log('ok', data);
            document.getElementById("nombre-ciudad").innerText = data.city
            document.getElementById("temperature").innerText = data.temperature
            document.getElementById("humidity").innerText = data.humidity
            document.getElementById("wind-speed").innerText = data.wind.speed
            document.getElementById("wind-dir").innerText = data.wind.dir
        })
        .catch(() => {
            document.getElementById("nombre-ciudad").innerText = "Ocurrió un error"
        })
}

function buscar() {
    let nombreCiudad = document.getElementById("ciudad").value
    obtenerClima(nombreCiudad)
}