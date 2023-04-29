function Bebida(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
    this.seleccionado = false
}

function Menu(nombre, precio, descripcion, foto) {
    this.nombre = nombre
    this.precio = precio
    this.descripcion = descripcion
    this.foto = foto
    this.seleccionado = false
}

//Objetos para crear las bebidas
let bebida1 = new Bebida("Martini", 2550)
let bebida2 = new Bebida("Cappuccino", 1370)
let bebida3 = new Bebida("Latte", 1350)
let bebida4 = new Bebida("Mojito", 2290)

let listadoBebidas = [bebida1, bebida2, bebida3, bebida4]

//console.log(listadoBebidas)

let menu1 = new Menu("Insalata de Riso", 6750, "Ensalada para dos", "https://blog.giallozafferano.it/dulcisinforno/wp-content/uploads/2019/08/Insalata-di-riso-1441.jpg")
let menu2 = new Menu("Insalata al Cipollotti", 5990, "Ensalada para uno", "https://www.donnamoderna.com/content/uploads/2004/08/insalata-di-pomodori-cipollotti-e-olive-725x545.jpg")
let menu3 = new Menu("Insalata Caprese", 8250, "Ensalada con orégano", "https://deliciaskitchen.b-cdn.net/wp-content/uploads/2022/07/ensalada-caprese-receta-original-italiana.jpg")

//definicion del arreglo vacío para los items del menú
let listadoMenu = []
//al arreglo vacío incorporamos los 3 objetos para los items del menú
listadoMenu.push(menu1, menu2, menu3)

function cambioBebida(indice, checkbox) {
    let seleccionado = $(checkbox).prop('checked') //el checkbox usa la referencia y crea el objeto y lo almacena 
    //console.log(seleccionado);
    listadoBebidas[indice].seleccionado = seleccionado
    console.log(listadoBebidas);
}

//console.log(listadoMenu)

$(document).ready(function () {
    listadoBebidas.forEach((bebida, index) => {
//append agrega al final, y no borra nada / d-flex es lo mismo que display:flex pero usado por bootstrap / this es la referencia del elemento HTML que disparó el evento (no es el objeto)
        $("#listado-bebidas").append(`
            <li class="list-group-item d-flex justify-content-between">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange="cambioBebida(${index}, this)">
            <label class="form-check-label" for="flexCheckDefault">
                ${bebida.nombre}
            </label>
        </div>
        <div class="fw-bold">$${bebida.precio.toLocaleString('es-CL')}</div>
        </li>
        `)
    })

    listadoMenu.forEach((menu, index) => {
        $("#listado-menu").append(`
        <li class="list-group-item justify-content-between">
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                ${menu.nombre}
            </label>
        </div>
        <div class="d-flex justify-content-between">
        <div>${menu.descripcion}</div>
        <div><img src= "${menu.foto}" class="rounded-circle" width="50px"</div>
        </div>
        <div class="fw-bold">$${menu.precio.toLocaleString('es-CL')}</div>
        </li>
        `)
    })
})