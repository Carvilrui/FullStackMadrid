function obtenerEmpleados(){
    fetch("empleados.json") //Aquí es donde se pone la url con la api
        .then(resultado => {
            return resultado.json(); //Se obtiene un respuesta tipo json
        })
        .then(datos =>{
            const{empleados} = datos; //Destructuring para crear variables a partir de las propiedades
            console.log(empleados);
            empleados.forEach(empleado => {
                console.log(empleado);
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);
            });
        })
}
obtenerEmpleados();

//Otra forma de hacerlo
async function obtenerEmpleados2(){
    const resultado = await fetch("empleados.json");
    const datos = await resultado.json();
    console.log(datos);
    const {empleados} = datos;
    console.log(empleados);
}
obtenerEmpleados2();