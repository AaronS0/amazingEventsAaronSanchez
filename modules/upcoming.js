import * as functions from "../modules/functions.js"

const urlData = "https://aulamindhub.github.io/amazing-api/events.json"

let upcomingEvents = []
let checkFiltro = []
let contenTarj = document.getElementById("contenTarj")
let checkbox = document.getElementById("check")
let buscar = document.getElementById("busqueda")

fetch(urlData).then(response => response.json())
    .then(data => {
        let info = data.events
        let date = data.currentDate

        upcomingEvents = functions.filtrarUpcoming(info, date)
        functions.pintarTarjetas(upcomingEvents, contenTarj)
        functions.filtrarCheckCategoria(upcomingEvents, checkFiltro)
        functions.pintarCheck(checkFiltro, checkbox)
        checkbox.addEventListener('change', () => functions.filtrarEventos(upcomingEvents))
        buscar.addEventListener('input', (filtroBusqueda) => functions.filtrarEventoTexto(filtroBusqueda, upcomingEvents))
    })