
/*
*******************
    COMIENZO CLASE 2023/10/23
*******************


/*
!!!!!!!!!!!!!
REPASO ULTIMO DÍA


for(let i=0; i<10; i++)             ///////FOR
{
    console.log(i)
}


let i=0;                            ///////WHILE
while(i<10){
    console.log(i);
    i++;
}


let i=0;                            ////////DO WHILE
do{
    console.log(i);
    i++;
}while(i<10)
*/

//Ejercicio de una función que invierte una cadena de texto. F: Invertir P: Cadena
function invertir(cadena){
    let inversa = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        inversa += cadena[i];
    }
        return inversa;
}
console.log(invertir("Hola Mundo"));


//Ejercicio de una función que concatena dos cadenas de texto. F: CONCATENAR P: CADENA1, CADENA2
function concatenar(cadena1, cadena2){
    let resultado = cadena1 + " " + cadena2;
    return resultado;
}
console.log(concatenar("Hola", "Mundo"));

//Ejercicio de una función que determina si una cadena contiene una letra. F: CONTIENE P: CADENA, LETRA
function contiene(cadena, letra){
    if(cadena.indexOf(letra)!=-1){
        return true;
    }else{
        return false;
    }
}
console.log(contiene("Hola Mundo", "n"))

//Ejercicio de una función que encuentra el número más grande en un array. F: MAXNUM P: ARRAY
function maxNum(array){
    let max = array[0];
    for(let i = 1; i < array.length; i++){
        if(max < array[i]){
            max = array[i];
        }
    }
    return max;
}
console.log(maxNum([5,7,8,9,3]))

//Ejercicio de una función que encuentra el número más pequeño en un array. F: MINNUM P: ARRAY
function minNum(array){
    let min = array[0];
    for(let i = 1; i < array.length; i++){
        if(min > array[i]){
            min = array[i];
        }
    }
    return min;
}
console.log(minNum([5,7,8,9,3]))

//Ejercicio de una función que cuenta la cantidad de elementos booleanos verdadero/falso en un array. F: NUMBOOLEANOS P: ARRAY, VALOR
function numBooleano(array, valor){
    let countTrue = 0;
    let countFalse = 0;
    for (let i=0; i<array.length; i++) {
        if (array[i] === valor) {
            countTrue++;
        } else {
            countFalse++;
        }
    }
    return [countTrue, countFalse];
}
console.log(numBooleano([true,false,true,false, true], true))

//Ejercicio de una función que determina si todos los elementos de un array son números. F: ARRAYNUMEROS P: ARRAY
function arrayNumeros(array){
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] !== 'number'){
            return false;
        }
    }
    return true;
}
console.log(arrayNumeros([2,4,"hola","adios"]));

//Ejercicio de una función que genera un número aleatorio entre N1 y N2. F: NUMALEATORIO P: N1,N2
function numAleatorio(n1, n2){
    return Math.floor((Math.random() * (n2 - n1 + 1)) + n1);
}
console.log(numAleatorio(1,10));

//Ejercicio de una función que calcula el área de un triángulo con base y altura como parámetros. Area=base*altura/2
//F: AREATRIAGULO P: BASE,ALTURA
function areaTriangulo(base, altura){
    return ((base * altura)/2).toFixed(2);
}
console.log(areaTriangulo(6,8));

//Ejercicio de una función que convierte grados Celsius a Fahrenheit. F: GRADOS P: CELSIUS
function grados(celsius){
    const fahrenheit = celsius * 9/5 + 32;
    return fahrenheit.toFixed(2);
}
console.log(grados(25));

//Ejercicio de una función que determina si un año es bisiesto. F: BISIESTO P: DIAS
function bisiesto(dias){
    if(dias===365){
        return "No es bisiesto";
    }else if(dias===366){
        return "Es bisiesto";
    }
}
console.log(bisiesto(365));

//Ejercicio de una función que cuenta la cantidad de vocales en una cadena. //F: VOCALES P: TEXTO
function vocales(texto){
    let contador=0;
    texto=texto.replace(/[^a-z]/gi,'').split('');
    for(let i in texto){
        switch(texto[i]) {
            case 'a':   
                contador++;
                break;
            case 'e':
                contador++;
                break;
            case 'i':
                contador++;
                break;
            case 'o':
                contador++;
                break;
            case 'u':
                contador++;
                break;
        }
    }
    return contador;
}
console.log(vocales("Hola"));

//Ejercicio de una función que cuenta la cantidad de palabras en una cadena. F: PALABRAS P: TEXTO
function palabras(texto){
    return texto.trim().split(' ').length;
}
console.log(palabras("Hola, como estas? Estoy bien!"));

//Ejercicio de una función que elimina los elementos duplicados de un array. F: ELIMINADUPLICADOS P: ARRAY
function eliminarduplicados(array) {
    const nuevaArray = [];
    for (const item of array) {
        if (!nuevaArray.includes(item)) {
            nuevaArray.push(item);
        }
    }
    return nuevaArray;
}
console.log(eliminarduplicados([1,2,2,4,5,7,8,9,9]));

//Ejercicio de una función que ordena un array de números de forma ascendente. F: ORDENARARRAY P: ARRAY
function ordernararray(array) {
    return array.sort((a, b)=> a - b);
}
console.log(ordernararray([3, 6, 8, 10, 1, 2, 1]));

//Ejercicio de una función que muestra por consola la tabla de multiplicar de un numero. F: TABLAMULTIPLICAR P: NUMERO
function tablamultiplicar(numero){
    let resultado= "";
    for(let i=1; i<=10; i++){
        resultado += `${numero} x ${i} = ${numero*i}\n`;
    }
    console.log(resultado);
}
tablamultiplicar(5);

//Ejercicio de una función que toma un número del 1 al 12 y devuelva el nombre del mes  correspondiente utilizando 
//una declaración switch F: NOMBREMES P: NUMMES
function nombremes(nummes){
    let mes="";
    switch(nummes){
        case 1:
            mes="Enero";
            break;
        case 2:
            mes="Febrero";
            break;
        case 3:
            mes="Marzo";
            break;
        case 4:
            mes="Abril";
            break;
        case 5:
            mes="Mayo";
            break;
        case 6:
            mes="Junio";
            break;
        case 7:
            mes="Julio";
            break;
        case 8:
            mes="Agosto";
            break;
        case 9:
            mes="Septiembre";
            break;
        case 10:
            mes="Octubre";
            break;
        case 11:
            mes="Noviembre";
            break;
        case 12:
            mes="Diciembre";
            break;
        default:
            mes="Mes no valido";
    }
    return mes;
}
console.log("Nombre del Mes: "+nombremes(5));

//Ejercicio de una función que determina si una contraseña es segura basándose en:  longitud>8,  mayúsculas y minusculas, números. F: CONTRASEÑASEGURA P: CONTRASEÑA
function contraseñasegura(contraseña){
    var segurac=false;
    if (contraseña.match(/[a-z]/g) && contraseña.match(/[A-Z]/g)){
        console.log('Contraseña con mayusculas y minusculas');
        segurac = true;
    }else{
        console.log('No hay letras en la contraseña');
    }
    if (contraseña.match(/\d/g)) {
        console.log('La contraseña tiene numeros');
        segurac = true;
    }else {
        console.log('No hay numeros en la contraseña');
    }
    if (!segurac){
        console.log('La contraseña es insegura');
    }else{
        console.log('La contraseña es segura');
    }
}
contraseñasegura('Hola1234');

//Ejercicio de una función que toma una cadena de texto y reemplaza todas las letras 'LETRA1' por 'LETRA2'. F: REEMPLAZAR P: LETRA1, LETRA2
cadena = 'hola';
function reemplazarLetras(letra1, letra2){
    //letra1 es el carácter a buscar y letra2 es el carácter para sustituirlo
    let nuevaCadena = '';
    for (var i = 0; i < cadena.length; i++){
        if (cadena[i] == letra1){
            nuevaCadena += letra2;
        }else{
            nuevaCadena += cadena[i];
        }
    }
    return nuevaCadena;
}
console.log(reemplazarLetras('l', 'z'));