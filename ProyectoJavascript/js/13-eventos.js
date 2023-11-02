let nombre = document.querySelector("#nombre");
let correo = document.querySelector("#correo");
let mensaje = document.querySelector("#mensaje");

//Ejercicio que pida por pantalla tu nombre y lo ponga en el h1
// let nombre = prompt("Ingresa tu nombre");
let heading = document.querySelector(".seccionPrincipal h1");
// heading.textContent = nombre;

//Ejemplo de addEventListener
console.log(1);

window.addEventListener("load", function(){
    console.log("Se ha cargado HMTL, CSS, JS");
})

console.log(2);

//Ejemplo de addEventListener que solo aplica al HTML
console.log(3);

document.addEventListener("DOMContentLoaded", function(){
    console.log("Se ha cargado HTML");
})

console.log(4);

//Ejemplo de evento scroll
window.addEventListener("scroll", function(){
    console.log("Haciendo scroll...");
})

//Ejemplo de evento de click
const botonNotificacion = document.querySelector("#boton");

botonNotificacion.addEventListener("click", function(evento){
    console.log(evento);
    evento.preventDefault();
    console.log("Mostrando notificación");
})

//Eventos de teclado - Ejemplo de evento tipo change
nombre.addEventListener("change", function(){
    console.log("Se ha completado el nombre...")
})

//Ejemplo de evento tipo input
nombre.addEventListener("input", function(evento){
    console.log("Escribiendo nombre con input...");
})

//Ejercicio que crea un evento de tipo input al correo y mensaje. Debajo del formulario crear un elemento tipo párrafo que diga: Esta web es de... con correo... y su propuesta es: ...
let resultadoNombre, resultadoCorreo, resultadoMensaje;
let datos = {
    nombre: "",
    correo: "",
    mensaje: ""
};

nombre.addEventListener("input", function(evento){
    resultadoNombre = evento.target.value;
    actualizarTexto();
    leerTexto();
});

correo.addEventListener("input", function(evento){
    resultadoCorreo = evento.target.value;
    actualizarTexto();
    leerTexto();
});

mensaje.addEventListener("input", function(evento){
    resultadoMensaje = evento.target.value;
    actualizarTexto();
    leerTexto();
});

let botonFormulario = document.querySelector(".enviar");

function actualizarTexto(){
    document.querySelector(".parrafo").textContent = `Esta es la web de ${resultadoNombre} con correo ${resultadoCorreo} y su propuesta es: ${resultadoMensaje}`;
}

//Ejercicio que crea un objeto con las propiedades nombre, correo y mensaje, e ir almacenando los resultados del formulario
function leerTexto(evento){
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}

datos.nombre = evento.target.value
datos.correo = evento.target.value
datos.mensaje = evento.target.value

//Ejemplo de evento tipo submit
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    console.log("Enviando formulario...");
});