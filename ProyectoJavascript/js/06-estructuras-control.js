//Ejemplo de una estructura if
let pin = 1234;

if(pin === 1234){
    console.log(`Tu número es ${pin}`);
}
else{
    console.log(`Tu número no es ${pin}`);
}

//Ejercicio de una estructura de if que comprueba si el pin es correcto
let pinEjercicio = 5678;
let pinIntroducido = 5678;

if(pinEjercicio === pinIntroducido){
    console.log("Pin Correcto");
}
else {
    console.log("Pin Incorrecto");
}

//Ejercicio de una estructura if que comprueba si puedo retirar el dinero
let saldo = 1000;
let importe = 2000;

if (saldo >= importe) {
    console.log('Se puede realizar el retiro');
} 
else {
    console.log('No se puede realizar el retiro, falta saldo disponible');
}

//Ejercicio que mezcla los 2 anteriores
let pinEjercicio2 = 9012;
let pinIntroducido2 = 9012;
let saldo2 = 2000;
let importe2 = 1000

if(pinEjercicio2 === pinIntroducido2){
    console.log("Pin Correcto");
    if(saldo2 >= importe2){
        console.log("Saldo suficiente");
    }
    else{
        console.log("Saldo insuficiente");
    }
}
else {
    console.log("Pin Incorrecto");
}

//Función del ejercicio anterior
function cajero(pin,importe){
    if(pin === 3456){
        console.log("Pin Correcto");
        if(importe <= 3000){
            console.log("Saldo suficiente");
        }
        else{
            console.log("Saldo insuficiente");
        }
    }
    else {
        console.log("Pin Incorrecto");
    }
}

cajero(3456, 1500);

//Ejemplo de una estructura else-if
let rol = "Editor";

if(rol === "Administrador"){
    console.log("Eres administrador");
}
else if(rol === "Editor"){
    console.log("Eres editor");
}
else if(rol === "Gestor"){
    console.log("Eres el gestor");
}
else{
    console.log("Eres nadie");
}

//Ejercicio de una estructrua else-if que compara en que estación del año estamos y diga la siguiente
let estacionActual = "Otoño";

if(estacionActual === "Otoño"){
    console.log("La estación actual del año es Otoño y la siguiente será Invierno");
}
else if(estacionActual === "Invierno"){
    console.log("La estación actual del año es Invierno y la siguiente será Primavera");
}
else if(estacionActual === "Primavera"){
    console.log("La estación actual del año es primavera y la siguiente será Verano");
}
else if(estacionActual === "Verano"){
    console.log("La estación actual del año es verano y la siguiente será Otoño");
}
else{
    console.log("Estación errónea e inexistente");
}

//Ejercicio de una estructura else-if que dice la nota de un examen
let notaExamen = 10;

if(notaExamen > 0 && notaExamen < 10){
    if (notaExamen >= 9 && notaExamen <= 10){
        console.log("La nota es sobresaliente")
    }
    else if(notaExamen >= 7){
        console.log("La nota es un notable");
    }
    else if(notaExamen == 6){
        console.log("La nota es bien");
    }
    else if(notaExamen == 5){
        console.log("La nota es suficiente");
    }
    else if(notaExamen <= 5 && notaExamen >= 0){
        console.log("La nota es insuficiente");
    }
}
else{
    console.log("Nota erronea o no existente");
}

//Ejemplo de una estructura switch
//let metodoPago = prompt("Introduce tu método de pago: ", "Método");
let metodoPago = "Tarjeta";

switch(metodoPago){
    case "Tarjeta":
        console.log("Has pagado con tarjeta");
        break;
    case "Efectivo":
        console.log("Has pagado en efectivo");
        break;
    case "Bizum":
        console.log("Has pagado con Bizum");
        break;
    default: console.log("Pendiente de pago");
    break;
}

// Ejercicio de una estructura switch que compara un número que cuando se multiplica por si mismo es menor que 100, si es menor que 200, y si no cumple ninguna condición

let numeroMultiplicado = 10;

if(numeroMultiplicado * numeroMultiplicado < 100){
    console.log("El número es menor que 100");
}
else if(numeroMultiplicado * numeroMultiplicado > 100 || numeroMultiplicado * numeroMultiplicado < 200){
    console.log("El número es mayor a 100 y menor a 200");
}
else{
    console.log("El número no cumple ninguna condición");
}

function multiplo(x){
    if(x * x < 100){
        console.log("El número es menor que 100");
    }
    else if(x * x > 100 || x * x < 200){
        console.log("El número es mayor a 100 y menor a 200");
    }
    else{
        console.log("El número no cumple ninguna condición");
    }   
}

multiplo(5);

//Ejercicio de una estructura switch  que compare un número es mayor de 10. Usar prompt.
//let numeroDiez = parseInt(prompt("Ingrese el valor del número: ", "Número"));
let numeroDiez = 7;

switch (numeroDiez + 10) {
    case 9:
        console.log("El número es 9");
        break;
    case 12:
        console.log("El número es 12");
        break;
    case 15:
        console.log("El número es 15");
        break;
    case 100:
        console.log("El número es 100");
        break;
    default: console.log("El número no cumple ninguna de las condiciones establecidas");
    break;
}

//Iteradores - Bucles

//Ejemplo de un bucle for
console.log(1);
console.log(2);
console.log(3);
console.log(4);

for (let i = 0; i <= 3; i++) {
    //i === ÍNDICE, SUELE EMPEZAR POR 0, PUES SE USA MUCHO PARA
    //RECORRER ARREGLOS
    //i<=3 SERÁ LA CONDICIÓN. SE EJECUTA MIENTRAS SE CUMPLE
    //i++ ACTUALIZADOR
    console.log(i);
}

//Ejercicio de un bucle for que muestra por consola del número 100 al 200
for (let i = 100; i <= 200; i++){
    console.log(i);
}

//Ejercicio de un bucle for que muestra por consola en orden descendente del número 100 al 0, pero de 5 en 5
for (let i = 100; i >= 0; i-=5){
    console.log(i); 
}

//Ejercicio de un bucle for que muestra por consola del número 1 al 20 solo lo números pares
for (let i = 1; i <= 20; i++){
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Ejemplo de como un bucle for recorre un array
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
        nombre: "Movil",
        precio: 550
    },
    {
        nombre: "PC",
        precio: 1750
    }
];

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    console.log(carrito[i].nombre);
}

//Ejemplo de un bucle while
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

//Ejemplo de un bucle do while
let j = 0;

do {
    console.log(j);
    j++;
} while (j < 10);