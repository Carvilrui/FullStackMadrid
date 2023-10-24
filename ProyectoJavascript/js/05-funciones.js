//Método de declaración de la función
function sumar(n1, n2){ //Argumento de la función
    //Cuerpo de la función
    console.log(n1 + n2);
}

sumar(10, 20); //Llamada a la función

//Método de expresión de la función
let sumar2 = function(n3, n4){
    console.log(n3 + n4);
}

sumar2(3, 9);

//Método IIFE
(function(){
    console.log("Esto es una función");
})();

//Diferencia entre método y función
const numero1 = 20;
const numero2 = "20";

console.log(typeof(parseInt(numero2))); //parseInt() Es una función
console.log(typeof(numero1.toString())); //.toString() Es un método

//Ejercicio de una función de texto

function color(texto){
    console.log(`El color elegido es: ${texto}`);
    console.log("El color elegido es:", texto);
}

color("Amarillo");

//Ejercicio de una función para calcular un descuento y el precio final
function precioFinal(importe, descuento) {
    console.log("El descuento es de:",(importe * descuento), "€ y el precio total es de:", (importe - (importe * descuento)), "€");
    console.log(`El descuento es de: ${importe * descuento} €`);
    console.log(`El precio total es de: ${(importe-(importe * descuento))} €`);
}

precioFinal(10, 0.4);

//Ejercicio de una función para contar caracteres de un texto
function caracteres(texto){
    console.log(`Tu tweet tiene ${texto.length} caracteres.`);
}

caracteres("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus a nunc ac malesuada. Aenean finibus, ligula vel luctus sodales, nunc massa pulvinar tortor, vel finibus ligula massa vitae ex. Fusce malesuada sollicitudin pretium amet.");

//Ejercicio de una función para buscar si una palabra está en un texto
function buscar(texto, palabra){
    console.log(`¿Está la palabra ${palabra} en el texto? ${texto.includes(palabra)}`);
}

buscar("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus a nunc ac malesuada. Aenean finibus, ligula vel luctus sodales, nunc massa pulvinar tortor, vel finibus ligula massa vitae ex. Fusce malesuada sollicitudin pretium amet.", "Lorem");

//Ejercicio de una función que añade un elemento a un array ya creado
let frutas = ["manzana","pera"];

function añadirFruta(palabra){
    frutas.push(palabra);
    console.log(frutas);
}

añadirFruta("plátano");

//Ejercicio de una función de resta
function restar(n5, n6){
    console.log(n5 - n6);
}

restar(4, 7);

//Función que retorna el valor de una multplicación
function multiplicar(x, y){
    return x * y;
}

let resultado = multiplicar(2, 3);
console.log(resultado); 

//Función que retorna el valor de una suma
let totalCarrito = 0;

function agregarCarrito(x){
    totalCarrito += x;
}

agregarCarrito(50);
agregarCarrito(20);
agregarCarrito(10);
console.log(totalCarrito);

//Ejercicio de una función para calcular el descuento de productos y obtener el acumulado
const descuento = 0.2;
let totalAhorro = 0;

function calcularDescuento(z){
    totalAhorro += z * descuento;
}

calcularDescuento(100);
calcularDescuento(120)
calcularDescuento(350);
console.log(totalAhorro);

//Métodos de propiedad: Son funciones con la sintaxis de método
let reproductor = { //Es un objeto de funciones
    reproducir : function(nc){
        console.log(`Reproduciendo canción con ID: ${nc}`);
    },

    pausar : function(){
        console.log('Pausando canción...');
    },

    crearPlaylist : function(nombre){
        console.log(`Creando playlist: ${nombre}`);
    }
}

reproductor.reproducir(21);
reproductor.pausar();
reproductor.crearPlaylist("Pop");

reproductor.borrarCancion = function(nc){
    console.log(`Borrando canción con ID: ${nc}`);
}

reproductor.borrarCancion(34);

//Función de flecha
let triplicar = function(x){
    return 3 * x;  
}

console.log(triplicar(7));

let triplicar2 = x => 3 * x;

console.log(triplicar2(7));

//Ejercicio que devuelve un el valor del número aumentado en 7 y lo almacena en una variable
let aprendiendo = y => y + 7;

let resultadoAprendiendo = aprendiendo(4);
console.log(resultadoAprendiendo);

//Ejercicio que cambia las funciones finales del archivo 04-arrays.js
let carrito = [
    {
        nombre: "TV", 
        precio: 750
    },
    {
        nombre: "Tablet", 
        precio: 350
    },
    {
        nombre: "Móvil", 
        precio: 550
    },
    {
        nombre: "PC", 
        precio: 1750
    }
]
console.log("Carrito de la compra: ", carrito);

let resultados;

// resultado = carrito.some(function(producto){
//     return producto.nombre === "Consola";
// })

resultados = carrito.some(function(producto){
    return producto.nombre === "Tablet";
})

console.log("Resultado de la función some:", resultados);

// resultado = carrito.reduce(function(total, producto){
//     return total + producto.precio;
// }, 0);
// console.log("Uso de reduce: ", resultado);

resultados = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log("Resultado de la función reduce: ", resultados); 

// resultado = carrito.filter(function(producto){
//     return producto.precio > 20 //Filtra valores del array
// });
// console.log("Uso de filter: ", resultado);

resultados = carrito.filter(producto => producto.precio > 400);
console.log("Resultado de la función filter: ", resultados);

//Ejercicio de función que sume 3 números
function sumaDeclaracion(n1, n2, n3){
    console.log(n1 + n2 + n3);
}

sumaDeclaracion(1, 12, 21);

let sumaExpresion = function(x, y, z){
    console.log(x + y + z);
}

sumaExpresion(4, 7, 11);

let sumaFlecha = (a, b, c) => (a + b +c);

let resultadoSumaFlecha = sumaFlecha(5, 10, 15);
console.log(resultadoSumaFlecha);

//Ejercicio de función que busca elementos en un array de números
let tabla = [1, 2, 3, 4, 5];

function buscarDeclaracion(numero) {
    console.log(tabla.includes(numero));
  }
buscarDeclaracion(4);

let buscarExpresion = function(numero){
    console.log(tabla.includes(numero));
}

buscarExpresion(2);

let buscarFlecha = numero => tabla.includes(numero);

let resultadoBuscarFlecha = buscarFlecha(6);
console.log(resultadoBuscarFlecha);

//Ejercicio de una función que suma 2 números y multiplica por 10 el resultado
let sumaMultiplicar = (a, b) => (a + b) * 10;
let resultadoSumamultiplicar = sumaMultiplicar(8, 9);
console.log(resultadoSumamultiplicar);

//Ejercicio de una función que suma los caracteres de 2 palabras
let contadorCaracteresPalabra = (palabra1, palabra2) => (palabra1.length + palabra2.length);
let resultadoContadorCaracteresPalabra = contadorCaracteresPalabra('Hola', 'Mundo');
console.log(resultadoContadorCaracteresPalabra);

//Ejercicio de una función que elimina el último elemento de una de array de 5 números
let numerosArray = [1, 2, 3, 4, 5];
let eliminarUltimoElemento = () => (numerosArray.pop());
eliminarUltimoElemento();