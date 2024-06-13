import * as functions from "../modules/functions.js"

const urlData = "https://aulamindhub.github.io/amazing-api/events.json"

let checkFiltro = []
let contenTarj = document.getElementById("contenTarj")
let checkbox = document.getElementById("check")
let buscar = document.getElementById("busqueda")

fetch(urlData).then(response => response.json())
    .then(data => {
        functions.pintarTarjetas(data.events, contenTarj)
        functions.filtrarCheckCategoria(data.events, checkFiltro)
        functions.pintarCheck(checkFiltro, checkbox)
        checkbox.addEventListener('change', () => functions.filtrarEventos(data.events))
        buscar.addEventListener('input', (filtroBusqueda) => functions.filtrarEventoTexto(filtroBusqueda, data.events))
    })