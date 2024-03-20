let miForma = document.querySelector("#miForma")
let valorTarea = document.querySelector("#valorTarea")
let nuestraLista = document.querySelector("#nuestraLista")
let tareas = []

// miForma.addEventListener("click", ()=> {
//     alert("Gracias por darle click a la forma")
// })

miForma.addEventListener("submit", (e)=> {
    e.preventDefault()
    // alert("Gracias por darle click a la forma")
    // console.log(valorTarea.value)
    crearTarea(valorTarea.value)
})

const crearTarea = (tarea) => {
    console.log(tarea)
    // nuestraLista.insertAdjacentElement("beforeend", tarea)
    let nuestroHTML = `<li>${tarea} <button onclick="borrarElemento(this)">Borrar</button></li> `
    // nuestraLista.insertAdjacentHTML("beforeend", tarea)
    nuestraLista.insertAdjacentHTML("beforeend", nuestroHTML)
    valorTarea.value = ""
    valorTarea.focus()
}

const borrarElemento = (elementoABorrar) => {
    // console.log(elementoABorrar)
    // alert("Borrar Elemento")
    elementoABorrar.parentElement.remove()
}