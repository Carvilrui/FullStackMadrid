"use strict"; //Ejecuta JS en modo estricto

let producto = {
    nombreProducto: "Juego", 
    precio: 60, 
    disponible: false};

console.log("Mi primer objeto producto: ", producto);
console.log(`Mi primer objeto con template string ${producto}`);

console.log("Uso de sintaxis de punto producto.precio: ", producto.precio);
console.log(`Uso de sinxtaxis de punto con template string: ${producto.precio}`);
console.log("Uso de corchetes", producto["precio"]);

//Añadir una propiedad nueva a un objeto
producto.categoria = "Videojuegos";
console.log("Añadir categoría a producto", producto);

//Eliminar una propiedad de un objeto
delete producto.disponible; //Elimina la propiedad y su valor
console.log("Borramos disponible a producto: ", producto);

const precioProducto = producto.precio;
console.log("Creamos una variable a partir de la propiedad precio de producto: ", precioProducto);

//Ejercicio almacenar variable
let nombreProducto = producto.nombreProducto;
console.log(`${producto.nombreProducto}`);
console.log(nombreProducto);

let {precio, categoria} = producto;
console.log(precio, categoria);
console.log(`Creamos las variables precio ${precio} y categoría con destructuring: ${categoria}`)

//Ejercicio
let playa = {
    nombrePlaya: "Los Boliches",
    ubicacion: "Málaga, España",
    recomendable: true,
    temperaturaAgua: 25
};
const {nombrePlaya, ubicacion, recomendable, temperaturaAgua} = playa;
console.log(`En la playa ${nombrePlaya} que está en ${ubicacion} el agua está a ${temperaturaAgua}. Te la recomiendo: ${recomendable}`);

playa.tipoArena = "Arena limpia";

//Congelar un objeto para que no se puedan modificar sus propiedad
Object.freeze(producto);
// producto.congelado = "Reservado";
console.log("Intento de añadir una propiedad tras el freeze ", producto);
console.log("¿Está congelado? ", Object.isFrozen(producto));

//Diferencias entre método freeze y seal
//La única diferencia es que con seal si se pueden modificar propiedad, en el resto (añadir y borrar) es igual

let medidas = {
    peso: 14,
    alto: 16,
    ancho: 123.3,
    profundidad: 1/3
};
Object.seal(medidas);
medidas.profundidad = 1;
console.log("Mostramos como se puede modificar con seal: ", medidas);

//Métodos spread y rest
let nuevoProducto = {...producto, ...medidas};
console.log("Nuevo objeto con spread operator: ", nuevoProducto);