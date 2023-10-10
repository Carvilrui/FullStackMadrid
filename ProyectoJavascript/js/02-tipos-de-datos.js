//Variables tipo string
const producto1 = "Juego de mesa EL PUEBLO DUERME"; //LA MÁS UTILIZADA
const producto2 = String("DOOBLE");
const producto3 = new String("UNO"); //SON OBJETOS

console.log("Producto 1: ", producto1);
console.log("Producto 2: ", producto2);
console.log("Producto 3: ", producto3);

console.log("Producto 1: ", typeof producto1);
console.log("Producto 2: ", typeof producto2);
console.log("Producto 3: ", typeof producto3);

let numero100;
let numero200;

numero100 = 100;
numero200 = "200";

//Devuelve el tipo de variable
console.log("Tipo de dato: ", typeof numero100);
console.log("Tipo de dato: ", typeof numero200);

//Devuelve la longitud de la cadena de texto
console.log("Método length: ", producto1.length);

//Devuelve la posición de la primera letra del texto que se busca 
console.log("Método indexOf: ", producto1.indexOf("DUERME"));

//Devuelve si está o no en el texto la palabra que se busca
console.log("Metodo includes: ", producto1.includes("DUERME"));

//Ejercicio usando funciones
let ejstring1 = "Lunes";
let ejstring2 = "Martes";
let ejstring3 = "Miércoles";

console.log(ejstring1.length);
console.log(ejstring2.indexOf("Jueves"));
console.log(ejstring3.includes("Viernes"));


//Variables tipo númerico
let numero1 = 100;
let numero2 = 200.25;
let numero3 = "200";
let numero4 = 2/3;

console.log(typeof numero1);
console.log(typeof numero2);
console.log(typeof numero3);
console.log(typeof numero4);

console.log("Número 1 + Número 2: ", numero1 + numero2);
console.log("Número 1 - Número 2: ", numero1 - numero2);
console.log("Número 1 * Número 2: ", numero1 * numero2);
console.log("Número 1 / Número 2: ", numero1 / numero2);
console.log("Número 1 % Número 2: ", numero1 % numero2);

//Método Math.random, Math.toFixed y Math.round
let resultado1 = Math.random();
let resultado2 = Math.random().toFixed(2);
let resultado3 = Math.round(Math.random() * 30);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

//Método Math.PI
let diametro = (Math.random() * 10) / 2;
let area = Math.round(Math.PI * Math.pow(diametro, 2));
console.log("El área es: ", area);

//Ejercicio Dado
let dado = Math.round(Math.random() * 6) + 1;
console.log(dado);

let resultadoOrden1 = 20 + 30 * 2;
let resultadoOrden2 = (20 + 30) * 2;

console.log(resultadoOrden1);
console.log(resultadoOrden2);

//Ejercicio Descuento
let prenda1 = 120;
let prenda2 = 85;
let prenda3 = 24;
let descuento = .4;
let precioSD = prenda1 + prenda2 + prenda3;
let precioCD = precioSD * descuento;
let ahorro = precioSD - precioCD;

console.log("Precio sin descuento aplicado: ", precioSD + "€");
console.log("Precio con descuento aplicado: ", precioCD.toFixed(2) + "€");
console.log("Usted ha ahorrado: ", ahorro.toFixed(2) + "€");

//Incremento y decremento de variables
let meGusta = 0;
meGusta+=15;
meGusta-=6;
console.log(meGusta);

//Ejercicio de concatenación
const nombre = "Carlo";
const email = "villanuevaruizcarlo@gmail.com";
// console.log("Nombre: " + nombre + " \nEmail: " + email);
console.log(`Nombre: ${nombre} \nEmail: ${email}`);

let boolean1 = true;
let boolean2 = false;
let boolean3 = "true";

console.log("Boolean1: ", typeof boolean1);
console.log("Boolean2: ", typeof boolean2);
console.log("Boolean3: ", typeof boolean3);

let boolean4 = new Boolean(true);
console.log("Boolean4: ", typeof boolean4);