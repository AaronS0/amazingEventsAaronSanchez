import * as functions from "../modules/functions.js"

const urlData = "https://aulamindhub.github.io/amazing-api/events.json"

let pastEvents = []
let checkFiltro = []
let contenTarj = document.getElementById("contenTarj")
let checkbox = document.getElementById("check")
let buscar = document.getElementById("busqueda")

fetch(urlData).then(response => response.json())
    .then(data => {
        pastEvents = functions.filtrarPastEvents(data.events, data.currentDate)
        functions.pintarTarjetas(pastEvents, contenTarj)
        functions.filtrarCheckCategoria(pastEvents, checkFiltro)
        functions.pintarCheck(checkFiltro, checkbox)
        checkbox.addEventListener('change', () => functions.filtrarEventos(pastEvents))
        buscar.addEventListener('input', (filtroBusqueda) => functions.filtrarEventoTexto(filtroBusqueda, pastEvents))
    })