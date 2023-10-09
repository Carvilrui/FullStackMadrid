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

let ejstring1 = "Lunes";
let ejstring2 = "Martes";
let ejstring3 = "Miércoles";

console.log(ejstring1.length);
console.log(ejstring2.indexOf("Jueves"));
console.log(ejstring3.includes("Viernes"));