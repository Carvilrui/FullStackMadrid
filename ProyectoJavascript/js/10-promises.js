//Ejemplo de un try-catch
const numero1 = 20;
const numero3 = 40;

console.log(numero1);

try{
    console.log(numero2);
}
catch(error){
    console.log("Tienes un error en console log 2");
}

console.log(numero3);

//Ejemplo de un promise
const autenticado = true;
const usuarioAutenticado = new Promise((resolve, reject) =>{
    if (autenticado == true){
        resolve('Usuario Autenticado');
    }else {
        reject('No se ha podido autenticar al usuario');
    }
});

console.log(usuarioAutenticado);

//Otra forma de hacerlo
usuarioAutenticado
    .then(function(resultado){
        console.log(resultado);
    })
    .catch(function(resultado){
        console.log(resultado);
    })

//Notificación mediante botón
    const boton = document.querySelector("#boton");

    boton.addEventListener("click", function(){
        console.log("Has hecho click.");
        Notification.requestPermission()
            .then(resultado => console.log(`El resultado es ${resultado}`));
    });

    if(Notification.permission == "granted"){
        new Notification("Ejemplo de notificación",{
            icon: "https://images.chesscomfiles.com/uploads/v1/user/177223003.8eaf2144.161x161o.56c2ca23b954@2x.png",
            body: "Texto de la notificación"
        })
    }

    //Simulación de una consulta a una base de datos
    // setTimeout(function(){
    //     console.log("Set timeout finalizado");
    // }, 3000)

    // setInterval(function(){
    //     console.log("Set interval actuando")
    // }, 4000)

//Ejemplo de una función asíncrona
function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log("Descargando clientes... Espere...");

        setTimeout(() => {
            resolve("Los clientes fueron descargados");
        }, 5000)
    });
}

async function app(){
    const resultadoAsync = await descargarNuevosClientes();
    console.log(resultadoAsync);
    console.log("Este código si se bloquea");
}
console.log(app());
console.log("Este código no se bloquea");

//Ejercicio de una función que descarga los pedidos y da una respuesta a los 3 segundos
function descargarPedidos(){
    return new Promise(resolve => {
        console.log("Descargando pedidos... Espere...");

        setTimeout(() => {
            resolve("Los pedidos fueron descargados");
        }, 3000)
    });
}
console.log(descargarPedidos());