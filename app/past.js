const data = {
    currentDate: "2023-01-01",
    events: [
        {
            _id: "639c723b992482e5f2834be9",
            name: "Collectivities Party",
            image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
            date: "2022-12-12",
            description:
                "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            assistance: 42756,
            price: 5,
            __v: 0,
        },
        {
            _id: "639c723b992482e5f2834beb",
            name: "Korean style",
            image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
            date: "2023-08-12",
            description:
                "Enjoy the best Korean dishes, with international chefs and awesome events.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            price: 10,
            __v: 0,
            estimate: 42756,
        },
        {
            _id: "639c723c992482e5f2834bed",
            name: "Jurassic Park",
            image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
            date: "2022-11-02",
            description:
                "Let's go meet the biggest dinosaurs in the paleontology museum.",
            category: "Museum",
            place: "Field",
            capacity: 82000,
            price: 15,
            __v: 0,
            assistance: 65892,
        },
        {
            _id: "639c723c992482e5f2834bef",
            name: "Parisian Museum",
            image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
            date: "2023-11-02",
            description:
                "A unique tour in the city of lights, get to know one of the most iconic places.",
            category: "Museum",
            place: "Paris",
            capacity: 8200,
            estimate: 8200,
            price: 3500,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf1",
            name: "Comicon",
            image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
            date: "2022-02-12",
            description:
                "For comic lovers, all your favourite characters gathered in one place.",
            category: "Costume Party",
            place: "Room C",
            capacity: 120000,
            assistance: 110000,
            price: 54,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf3",
            name: "Halloween Night",
            image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
            date: "2023-02-12",
            description: "Come with your scariest costume and win incredible prizes.",
            category: "Costume Party",
            place: "Room C",
            capacity: 12000,
            estimate: 9000,
            price: 12,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf5",
            name: "Metallica in concert",
            image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
            date: "2023-01-22",
            description: "The only concert of the most emblematic band in the world.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            estimate: 138000,
            price: 150,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf7",
            name: "Electronic Fest",
            image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
            date: "2022-01-22",
            description:
                "The best national and international DJs gathered in one place.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            assistance: 110300,
            price: 250,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bf9",
            name: "10K for life",
            image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
            date: "2022-03-01",
            description: "Come and exercise, improve your health and lifestyle.",
            category: "Race",
            place: "Soccer field",
            capacity: 30000,
            assistance: 25698,
            price: 3,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bfb",
            name: "15K NY",
            image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
            date: "2023-03-01",
            description:
                "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            category: "Race",
            place: "New York",
            capacity: 3000000,
            price: 3,
            __v: 0,
            estimate: 2569800,
        },
        {
            _id: "639c723d992482e5f2834bfd",
            name: "School's book fair",
            image: "https://i.postimg.cc/Sst763n6/book1.jpg",
            date: "2023-10-15",
            description: "Bring your unused school book and take the one you need.",
            category: "Book Exchange",
            place: "Room D1",
            capacity: 150000,
            estimate: 123286,
            price: 1,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bff",
            name: "Just for your kitchen",
            image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
            date: "2022-11-09",
            description:
                "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            category: "Book Exchange",
            place: "Room D6",
            capacity: 130000,
            assistance: 90000,
            price: 100,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c01",
            name: "Batman",
            image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
            date: "2022-3-11",
            description: "Come see Batman fight crime in Gotham City.",
            category: "Cinema",
            place: "Room D1",
            capacity: 11000,
            assistance: 9300,
            price: 225,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c03",
            name: "Avengers",
            image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
            date: "2023-10-15",
            description:
                "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            category: "Cinema",
            place: "Room D1",
            capacity: 9000,
            estimate: 9000,
            price: 250,
            __v: 0,
        },
    ],
}

let date = data.currentDate
let info = data.events
let contenTarj = document.getElementById("contenTarj")
let pastEvents = []
let checkbox = document.getElementById("check")
let checkFiltro = []
let buscar = document.getElementById("busqueda")


for (let i = 0; i < info.length; i++) {
    if (date > info[i].date) {
        pastEvents.push(info[i])
    }
}

function crearTarjeta(contenedorTarjeta, info) {
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
                    <a href="./details.html?value=${info._id}" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div> `
    contenedorTarjeta.appendChild(nuevoContenedor)
}

function pintarTarjetas(arreglo, contenedorTarjeta) {
    contenedorTarjeta.innerHTML = ""
    for (let i = 0; i < arreglo.length; i++) {
            crearTarjeta(contenTarj, arreglo[i])  
    }
}
pintarTarjetas(pastEvents, contenTarj)

checkbox.addEventListener('change', () => {
    let eventosFiltrados = pastEvents
    let checkboxChecked = document.querySelectorAll("input[type=checkbox]:checked")
    
    if (checkboxChecked.length != 0) {
        eventosFiltrados = filtrarCheck(checkboxChecked, pastEvents)
    }
    let texto = document.getElementById("busqueda").value
    if (texto != "") {
        eventosFiltrados = filtrarText(texto, eventosFiltrados)
    }
    pintarTarjetas(eventosFiltrados, contenTarj)
})

buscar.addEventListener('input', (filtroBusqueda) => {
    let checkboxChecked = document.querySelectorAll("input[type=checkbox]:checked")
    let texto = document.getElementById("busqueda").value
    let eventosFiltrados2 = filtrarText(texto, pastEvents)
    if (checkboxChecked.length != 0) {
        eventosFiltrados2 = filtrarCheck(checkboxChecked, eventosFiltrados2)
        
    } if (filtroBusqueda.target.value != "") {
        pintarTarjetas(eventosFiltrados2, contenTarj)
    } else {
        pintarTarjetas(pastEvents, contenTarj)
    }
})

pastEvents.forEach(filtrar => {
    if (!checkFiltro.includes(filtrar.category)) {
        checkFiltro.push(filtrar.category)
    }
})

function crearCheck(contenedorCheck, categorias) {
    let nuevoContenedorCheck = document.createElement("li")
    nuevoContenedorCheck.innerHTML = `
        <input type="checkbox" value="${categorias}">
        <label for="cbox">${categorias}</label>`
    checkbox.appendChild(nuevoContenedorCheck)
}

function pintarCheck(arregloCheck, contenedorCheck) {
    contenedorCheck.innerHTML = ""
    for (let i = 0; i < arregloCheck.length; i++) {
        crearCheck(checkbox, arregloCheck[i])
    }
}
pintarCheck(checkFiltro, checkbox)

function filtrarCheck(arregloEventos, arreglo) {
    arregloEventos = Array.from(arregloEventos)
    arregloEventos = arregloEventos.map(checkbox => checkbox.value)
    let eventosFiltrados = arreglo.filter(pastEvents => arregloEventos.includes(pastEvents.category))
    return eventosFiltrados
}

function filtrarText(texto, arreglo) {
    let eventosFiltrados2 = arreglo.filter(pastEvents => pastEvents.name.toLowerCase().includes(texto.toLowerCase()))
    return eventosFiltrados2
}