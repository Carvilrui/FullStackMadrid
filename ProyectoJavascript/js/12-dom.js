//Llamada de un objeto
const heading = document.querySelector(".seccionPrincipal h1");
console.log(heading);

const boton = document.querySelector("#botonPrincipal");
console.log(boton);

//Modificación de elementos
heading.textContent = "Nuevo título 1234";

//Añadir clases
heading.classList.add("NuevaClaseDesdeJS");

//Eliminar clases
heading.classList.remove("NuevaClaseDesdeJS");

//Selección de enlaces
const enlacesJS = document.querySelectorAll("div a");
console.log(enlacesJS);

//Elección de un enlace en específico
console.log(enlacesJS[0]);

//Modificación de un enlace
enlacesJS[0].href = "https://google.com";

//Ejercicio que modifica el contenido y el href del segundo enlace
enlacesJS[1].textContent = "Enlace 2 modificado";
enlacesJS[1].href = "https://google.es";

//Ejemplo de getElementById
const botonJS = document.getElementById("botonPrincipal");
console.log(botonJS);

//Ejemplo de getElementByClassName
const botonJSClass = document.getElementsByClassName("botonClase");

//Creación de un nuevo objeto y ejemplo de uso del appendChild
const nuevoEnlace = document.createElement("A");
nuevoEnlace.href = "#";
nuevoEnlace.textContent = "Nuevo Enlace 4";
nuevoEnlace.classList.add("enlace");
console.log(nuevoEnlace);
const enlacesJS2 = document.querySelector(".navPrincipal");
enlacesJS2.appendChild(nuevoEnlace);    

//Ejercicio que crea un enlace que este al final del div y con el mismo estilo
const ejercicioEnlace = document.createElement("A");
ejercicioEnlace.href = "#";
ejercicioEnlace.textContent = "Enlace Ejercicio";
ejercicioEnlace.className = "enlace";
document.querySelector(".navPrincipal").appendChild(ejercicioEnlace);