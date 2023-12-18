const form = document.querySelector('#contactform');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    // Validar que los campos requeridos no estén vacíos
    if (!form.checkValidity()) {
        // Bootstrap mostrará los mensajes de error automáticamente, no es necesario hacer nada más aquí
        return;
    }

    // Mostrar loader utilizando Bootstrap
    const loader = document.createElement('div');
    loader.className = 'overlay-form';
    loader.innerHTML = '<div class="spinner-border text-primary" role="status" style="font-size: 2rem;"><span class="sr-only"></span></div>';
    document.body.appendChild(loader);

    try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Resetea el formulario
            // form.reset();
            // Ocultar loader después de 3 segundos (ajusta el tiempo según tus necesidades)

            setTimeout(() => {
                loader.remove();
                // Recarga la página
                // location.reload();

            }, 3000);

            Swal.fire({
                    title: "Éxito",
                    text: "Mensaje enviado correctamente",
                    icon: "success",
                    backdrop: true,
                    timer: 3000,
                    allowOutsideClick: false,
                    showConfirmButton: false
            });
                    
            setTimeout(() => {
                //Recarga la pagina
                location.reload();
            }, 3000);

        } else {
            throw new Error('Error en la solicitud');
        }
    } catch (error) {
        console.error(error);

        // Manejar el error y oculta el loader
        loader.remove();
        Swal.fire({
            title: "Error",
            text: "Hubo un error al enviar el mensaje",
            icon: "error",
        });
    }
}