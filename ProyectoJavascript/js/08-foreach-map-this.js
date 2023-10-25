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

for (let i=0; i<carrito.length;i++){
    console.log(carrito[i]);
}

//Ejemplo del método foreach. Se usa para mostrar por consola
carrito.forEach(function(producto){
    console.log(producto, producto.nombre);
})

//Versión función de flecha
carrito.forEach(producto => console.log(producto, producto.nombre));

//Ejemplo de método de map. Se usa para crear nuevos array
const arrayMap = carrito.map(producto => producto.nombre);
console.log(arrayMap);
 
//Ejercicio que crea un objeto que se llama reserva que tenga las propiedades: nombre, apellido, total, pagado. Mostrar con la sintaxis de punto el nombre.
const reserva = {
    nombre: 'Juan',
    apellido: 'Nuñez',
    total: 5000,
    pagado: true
};
console.log(reserva.nombre);

//Ejercicio de una función llamada información que detalla lo del ejercicio anterior
reserva.informacion = function(){
    return `El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}€`;
}

console.log(reserva.informacion());
//Si se utiliza .this no se pueden hacer función de flecha

//Ejercicio crear un objeto llamado fecha con las propiedades: año, mes, día, faltantes, con una función en su interior que diga cuantos días quedan para acabar el mes de octubre, y usando sintaxis de punto
let fecha = {
    dia: 24,
    mes: 10,
    año: 2023,
    faltantes: function(){
        return `Faltan ${31 - this.dia}`;
    }
}
console.log(fecha.faltantes());