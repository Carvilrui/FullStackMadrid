function obtenerZonas() {
    fetch("zonas.json")
        .then(resultado => {
            return resultado.json();
        })
        .then(datos => {
            const {zonas} = datos;
            const seccionZonas = document.querySelector(".seccionZonas");

            zonas.forEach(zona => {
                let contenedor = document.createElement("div");

                let nombreZona = document.createElement("p");
                nombreZona.textContent = "Zona " + zona.zona;

                let ciudades = document.createElement("p");
                ciudades.textContent = zona.ciudades;

                let contenedor2 = document.createElement("div");

                let enlaceZonas = document.createElement("a");
                enlaceZonas.href = zona.enlaceZonas;
                enlaceZonas.textContent = "Ir a página de zona";

                let enlaceCursos = document.createElement("a");
                enlaceCursos.href = zona.enlaceCursos;
                enlaceCursos.textContent = "Ver cursos en esta zona";

                contenedor.appendChild(nombreZona);
                contenedor.appendChild(ciudades);
                contenedor2.appendChild(enlaceZonas);
                contenedor2.appendChild(enlaceCursos);

                seccionZonas.appendChild(contenedor);
                seccionZonas.appendChild(contenedor2);
            });
        });
}

obtenerZonas();