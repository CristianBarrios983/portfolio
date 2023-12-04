const cargarProyectos = () => {
    fetch('../../proyectos.json')
        .then(respuesta => respuesta.json())
        .then(proyectos => {
            // Obtiene el contenedor para agregar las tarjetas
            const contenedorProyectos = document.getElementById('proyectos');

            // Itera sobre cada proyecto y crea la tarjeta
            proyectos.Proyectos.forEach(proyecto => {
                const tarjeta = document.createElement('div');
                tarjeta.className = 'col-md-4 mb-4';
                tarjeta.innerHTML = `
                    <div class="card rounded-0 position-relative">
                        <img src="${proyecto.imagen}" class="card-img-top rounded-0" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${proyecto["nombre-proyecto"]}</h5>
                            <div class="overlay">
                                <div class="buttons d-flex gap-2">
                                    <a href="${proyecto['url-codigo']}" class="btn btn-primary rounded-0 fs-5">Codigo</a>
                                    <a href="${proyecto['url-ver']}" class="btn btn-danger rounded-0 fs-5">Ver proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Agrega la tarjeta al contenedor
                contenedorProyectos.appendChild(tarjeta);
            });
        })
        .catch(error => console.error('Error al cargar proyectos:', error));
}

cargarProyectos();
