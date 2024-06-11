import * as functions from "../modules/functions.js"

const urlData = "https://aulamindhub.github.io/amazing-api/events.json"

let pastEvents = []
let contenFirst = document.getElementById("contenFirstTd")

fetch(urlData).then(response => response.json())
    .then(data => {
        let highestAssistance = []
        pastEvents = functions.filtrarPastEvents(data.events, data.currentDate)
        pastEvents.sort((a, b) => b.assistance - a.assistance).forEach(filtrar => {
            highestAssistance.push(filtrar)
            
        })
        console.log(highestAssistance[0].assistance);






        let lowestAssistance = []
        pastEvents = functions.filtrarPastEvents(data.events, data.currentDate)
        pastEvents.sort((a, b) => a.assistance - b.assistance).forEach(filtrar => {
            lowestAssistance.push(filtrar)
        })
        console.log(lowestAssistance[0].assistance);

        let highestCapacity = []
        data.events.sort((a, b) => b.capacity - a.capacity).forEach(filtrar => {
            highestCapacity.push(filtrar)
        })
        console.log(highestCapacity[0].capacity);




        function crearFila(padreTabla) {
            let nuevaFila = ""
            padreTabla.innerHTML = `
                <td>${highestAssistance[0].name} : ${highestAssistance[0].assistance}</td>
                <td>${lowestAssistance[0].name} : ${lowestAssistance[0].assistance}</td>
                <td>${highestCapacity[0].name} : ${highestCapacity[0].capacity}</td>
                `
            padreTabla.appendChild(nuevaFila)
        }

        function pintarTabla(info) {
            crearFila(contenFirst)
        }
        pintarTabla(data.events)
    })