let variableA = "valor varA";
let variableB = "valor varB";
let variableC = "valor varC";

let ejercicio6 = {};

ejercicio6.variableA = variableA;
ejercicio6.variableB = variableB;
ejercicio6.variableC = variableC;

console.log (ejercicio6);

let numeros = [10, 20, 30, 40, 50];
console.log("Mi primer array: ", numeros);
console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo");
console.table(meses);

let diaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
console.table(diaSemana);

const mezclaDatos = ["Hola", 10, true, null, [1 ,2, 3]];
console.table(mezclaDatos);

console.log("Acceso a los valores del array con el índice 2: ", numeros[2]);

console.log("Índice 0 del array: ", diaSemana[0], "\nÍndice 3 del array: ", diaSemana[3]);

let finde = {
    prop1: "Texto",
    prop2: 7,
    prop3: true,
};

finde.finSemana = ["Sábado", "Domingo"];
console.log(finde);

let {prop1, prop2, prop3, finSemana} = finde;

console.log("Resultado del objeto finde: ", prop1 + ",", prop2 + ",", prop3 + ",", finSemana);

console.log("Longitud del array: ", meses.length);

meses.forEach(function(x){
    console.log(x); //Función de iteración
})

numeros.push(60); //Añade el valor al final del araay
numeros.push(70, 80, 90, 100);
console.log("Números actualizados: ", numeros);

numeros.unshift(-30, -20, -10, 0) //Añade el valor al incio del array
console.log("Números actualizados: ", numeros);

numeros.pop(); //Elimina el último elemento del array
console.log("Números actualizados: ", numeros);

numeros.shift() //Elimina el primer elemento del array
console.log("Números actualizados: ", numeros);

numeros.splice(2, 3) //Elimina X elementos a partir del Y
console.log("Números actualizados: ", numeros);

const nuevoArreglo = [-30, ...numeros, 110]; //Fusiona arrays
console.log("Nueva tabla" ,nuevoArreglo);

let estaciones = ["Verano"];
estaciones.unshift("Primavera");
estaciones.push("Otoño", "Invierno");
console.log("Las estaciones del año: ", estaciones);

let carrito = [
    {
        articulo1: "Videojuego", 
        precio: 60
    },
    {
        articulo2: "Planta", 
        precio: 30
    },
    {
        articulo3: "Maceta", 
        precio: 10
    },
    {
        articulo4: "Mando", 
        precio: 20
    }
]
console.log("Carrito de la compra: ", carrito);

let resultado;
resultado = meses.includes("Abril");
console.log("Uso de includes para buscar en array plano: ", resultado);

resultado = carrito.some(function(producto){
    return producto.nombre === "Consola" //Busca el valor en array de objetos
})

resultado = carrito.reduce(function(total, producto){
    return total + producto.precio //Suma los valores del array
}, 0); //El valor desde donde inicia
console.log("Uso de reduce: ", resultado);

resultado = carrito.filter(function(producto){
    return producto.precio > 20 //Filtra valores del array
});
console.log("Uso de filter: ", resultado);