//Ejemplo de object manual
const producto = {
    nombre: "tablet",
    precio: 500
}

//Ejemplo de object constructor. El nomre de la clase siempre se inicia con mayúscula
function ProductoClase(nombre, precio, disponibilidad = false, categoria = "play"){
    this.nombreObjeto = nombre;
    this.precioObjeto = precio;
    this.categoria = categoria;
    this.disponibilidad = disponibilidad;
}

//Creación de una instancia
const producto2 = new ProductoClase("Monitor curvo", 800, true, "tech");
const producto3 = new ProductoClase("PC", 1800);
const producto4 = new ProductoClase("Reloj", 800);
console.log(producto2);
console.log(producto3);
console.log(producto4);

//Constructor de objeto con propiedades: día, mes y año
function Fecha (dia,mes,año){
    this.dia= dia;
    this.mes= mes;
    this.año= año;
}
let fecha = new Fecha(5, 5, 2019);
let fecha2 = new Fecha(14, 3, 2020)
let fecha3 = new Fecha(7,9,2021);
let fecha4 = new Fecha(29,7,2022);
console.log(fecha);
console.log(fecha2);
console.log(fecha3);
console.log(fecha4);

//Método prototype. Permite crear funciones que solo se utilizan en un objeto específico
ProductoClase.prototype.formatearProducto = function(){
    return `El producto ${this.nombreObjeto} tiene un precio de ${this.precioObjeto} €`;
}

//Creación de 3 instancias más de producto
const producto5 = new ProductoClase("Televisor", 1200, true, "electronics");
const producto6 = new ProductoClase("Cámara", 500, true, "electronics");
const producto7 = new ProductoClase("Audifonos", 150, true, "audio");
console.log(producto5.formatearProducto());
console.log(producto6.formatearProducto());
console.log(producto7.formatearProducto());

//Otra forma de crear objetos
class ProductoClase2{
    constructor(nombre, precio){
        this.nombreObjeto2 = nombre;
        this.precioObjeto2 = precio;
    }
    formatearProducto2(){
        return `El producto ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2} €`;
    }
    //Ejercicio que añade un método que añade el cálculo del precio con un 20% de descuento
    descuento(){
        return `El precio final con el descuento es de ${this.precioObjeto2 * 0.8} €`;
    }
}
const producto8 = new ProductoClase2('Teclado', 50);
console.log(producto8);
console.log(producto8.formatearProducto2());
console.log(producto8.descuento());

//Ejercicio de un object constructor libro haciendo uso del constructor con las propiedades: nombre, precio, isbn
class Libro{
    constructor(nombre, precio, isbn){
        this.nombreLibro = nombre;
        this.precioLibro = precio;
        this.isbn = isbn;
    }
}
const libro1 = new Libro("La casa de papel", 20, '978-84-905-4');
console.log(libro1);

//Ejemplo de herencia
class Biblioteca extends Libro{
    constructor(nombre, precio, isbn, categoria){
        super(nombre, precio, isbn);
        this.categoria = categoria;
    }
    formatearProducto3(){
        return `El producto ${this.nombre} pertenece a la categoría ${this.categoria}`;
    }
}
const libro2 = new Biblioteca ("Los detectives salvajes", 20, '978-84-905-4', 'detective');
console.log(libro2);
console.log(libro2.formatearProducto3());

//Ejercicio de un object constructor llamado coche con las propiedades: Marca, añoCompra, motor, matricula, y añadir dentro del constructor que diga los años que tiene el coche
class Coche {
    constructor (marca, añoCompra, motor, matricula) {
        this.marca = marca;
        this.añoCompra = añoCompra;
        this.motor = motor;
        this.matricula = matricula;
    }
    edadCoche() {
        const actual = new Date().getFullYear();
        let edad = actual - this.añoCompra;
        if (edad < 0) {
            console.log(`No se puede calcular la edad negativa`);
        } else {
            console.log (`El coche tiene ${edad} año(s).`);
        }
    }
}
let coche1 = new Coche('Renault', 2016, '1.6L', 'ABC123');
coche1.edadCoche();
console.log(coche1);
let coche2 = new Coche ('Ford', 2018, '2.0L', 'XYZ456');
coche2.edadCoche();
console.log(coche2);

//Ejercicio de un object constructor llamado itv que herede de la clase anterior las propiedades: añoCompra, matricula y que añada la propiedad: añoItv. Además crear un método que calcule cuanto resta para la próxima ITV
class Itv extends Coche {
    constructor(marca, añoCompra, motor, matricula, añoItv) {
        super(marca, añoCompra, motor, matricula);
        this.añoItv = añoItv;
    }
    //Añada añoItv y un método que calcule el tiempo que falta para la próxima ITV
    calculaProximoITV () {
        const actual = new Date().getFullYear();
        let proximoITV = this.añoItv - actual;
        console.log(`La siguiente ITV será en ${proximoITV} año(s).`);
    }
}
let itv1 = new Itv("Toyota", 2022, "1.6L", "LMN789", 2026);
itv1.calculaProximoITV();
console.log(itv1);
let itv2 = new Itv("BMW", 2020, "2.0L", "PQR012", 2024);
itv2.calculaProximoITV();
console.log(itv2);