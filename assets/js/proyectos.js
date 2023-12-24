const cargarProyectos = () => {
    fetch('./proyectos.json')
        .then(respuesta => respuesta.json())
        .then(proyectos => {
            // Obtiene el contenedor para agregar las tarjetas
            const contenedorProyectos = document.getElementById('proyectos');

            // Itera sobre cada proyecto y crea la tarjeta
            proyectos.Proyectos.forEach(proyecto => {
                const tarjeta = document.createElement('div');
                tarjeta.className = 'col-md-4 mb-4 proyecto';
                tarjeta.setAttribute('data-aos', 'fade-up');
                tarjeta.innerHTML = `
                    <div class="card rounded-0 position-relative">
                        <img src="${proyecto.imagen}" class="card-img-top rounded-0" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${proyecto["nombre-proyecto"]}</h5>
                            <div class="overlay">
                                <div class="buttons d-flex gap-2">
                                    ${proyecto['url-ver'] ? `<a href="${proyecto['url-ver']}" class="btn btn-danger rounded-0 fs-5" target="_blank">Ver proyecto</a>` : ''}
                                    <button class="btn btn-info rounded-0 fs-5" onclick="cargarModal('${proyecto["nombre-proyecto"]}', '${proyecto["descripcion"]}', '${proyecto["url-codigo"]}', '${proyecto["lenguajes"]}')" >Info</button>
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


const cargarModal = (nombreProyecto, descripcionProyecto, urlCodigo, lenguajes) => {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('projectTitle');
    const description = document.getElementById('projectDescription');
    const urlCode = document.getElementById('url-code');
    const badgeModal = document.getElementById('badges');


    badgeModal.innerHTML = '';

    if(nombreProyecto){

        modalTitle.innerHTML = nombreProyecto;
    }

    if(descripcionProyecto){
        description.innerHTML = descripcionProyecto;
    }else{
        description.innerHTML = "No hay descripcion para este proyecto";
    }

    if(lenguajes){

        lenguajes = lenguajes.split(',');
    
        lenguajes.forEach((lenguaje) => {
            const span = document.createElement('span');
            span.className = 'badge text-bg-primary me-1';
            span.textContent = lenguaje;
            badgeModal.appendChild(span);
        });
    }

    if(urlCodigo){
        urlCode.href = urlCodigo;
    }

    modal.style.display = 'block';

}

const cerrarModal = () => {
    const modal = document.getElementById('modal');
    
    modal.style.display = 'none';
}
