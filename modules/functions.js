let contenTarj = document.getElementById("contenTarj")
let checkbox = document.getElementById("check")

export function crearTarjeta(contenedorTarjeta, info) {
    let nuevoContenedor = document.createElement("div")
    nuevoContenedor.className = "col"
    nuevoContenedor.innerHTML = `
        <div class="card me-3 my-1 h-100 cards-i">
            <img src = "${info.image}" class="card-img-top" alt="${info.name}" style="height: 35%;">
            <div class="card-body d-flex flex-column justify-content-around" style="height: 65%;">
                <h4 class="card-title">${info.name}</h4>
                <p class="card-text">${info.description}</p>
                <p class="card-text">Date: ${info.date}</p>
                <p class="card-text">Category: ${info.category}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <h6 class="card-text">Price: ${info.price}</h6>
                    <a href="/details.html?value=${info._id}" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div> `
    contenedorTarjeta.appendChild(nuevoContenedor)
}

export function pintarTarjetas(arreglo, contenedorTarjeta) {
    contenedorTarjeta.innerHTML = ""
    for (let i = 0; i < arreglo.length; i++) {
        crearTarjeta(contenTarj, arreglo[i])
    }
}

function crearCheck(contenedorCheck, categorias) {
    let nuevoContenedorCheck = document.createElement("li")
    nuevoContenedorCheck.innerHTML = `
        <input type="checkbox" value="${categorias}">
        <label for="cbox">${categorias}</label>`
    checkbox.appendChild(nuevoContenedorCheck)
}

export function pintarCheck(arregloCheck, contenedorCheck) {
    contenedorCheck.innerHTML = ""
    for (let i = 0; i < arregloCheck.length; i++) {
        crearCheck(checkbox, arregloCheck[i])
    }
}

export function filtrarEventos(info) {
    let eventosFiltrados = info
    let checkboxChecked = document.querySelectorAll("input[type=checkbox]:checked")

    if (checkboxChecked.length != 0) {
        eventosFiltrados = filtrarCheck(checkboxChecked, info)
    }
    let texto = document.getElementById("busqueda").value
    if (texto != "") {
        eventosFiltrados = filtrarText(texto, eventosFiltrados)
    }
    pintarTarjetas(eventosFiltrados, contenTarj)
}

function filtrarCheck(arregloEventos, arreglo) {
    arregloEventos = Array.from(arregloEventos)
    arregloEventos = arregloEventos.map(checkbox => checkbox.value)
    let eventosFiltrados = arreglo.filter(info => arregloEventos.includes(info.category))
    return eventosFiltrados
}

function filtrarText(texto, arreglo) {
    let eventosFiltrados2 = arreglo.filter(info => info.name.toLowerCase().includes(texto.toLowerCase()))
    return eventosFiltrados2
}

export function filtrarEventoTexto(filtroBusqueda, info) {
    let checkboxChecked = document.querySelectorAll("input[type=checkbox]:checked")
    let texto = document.getElementById("busqueda").value
    let eventosFiltrados2 = filtrarText(texto, info)
    if (checkboxChecked.length != 0) {
        eventosFiltrados2 = filtrarCheck(checkboxChecked, eventosFiltrados2)
    } if (filtroBusqueda.target.value != "") {
        pintarTarjetas(eventosFiltrados2, contenTarj)
    } else {
        pintarTarjetas(eventosFiltrados2, contenTarj)
    } if (eventosFiltrados2 == "") {
        showAlert("No events match the filters");
    }
}

function showAlert(message) {
    contenTarj.innerHTML = "";
    const alert = document.createElement("div");
    alert.className = "alert alert-info p-4 my-5";
    alert.setAttribute("role", "alert");
    alert.innerText = message;
    contenTarj.appendChild(alert);
}

export function filtrarCheckCategoria(info, checkFiltro) {
    info.forEach(filtrar => {
        if (!checkFiltro.includes(filtrar.category)) {
            checkFiltro.push(filtrar.category)
        }
    })
}

export function filtrarPastEvents(info, date) {
    let pastEvents = []
    for (let i = 0; i < info.length; i++) {
        if (date > info[i].date) {
            pastEvents.push(info[i])
        }
    } return pastEvents
}

export function filtrarUpcoming(info, date) {
    let upcomingEvents = []
    for (let i = 0; i < info.length; i++) {
        if (date < info[i].date) {
            upcomingEvents.push(info[i])
        }
    } return upcomingEvents
}