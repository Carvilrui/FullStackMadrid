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