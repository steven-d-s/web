// Función para mostrar los módulos según el enlace que se haga clic
    function mostrarModulo(modulo) {
        ocultarModulos(); // Primero ocultamos todos los módulos
        modulo.style.display = 'block'; // Luego mostramos el módulo seleccionado
    }

    // Asignar los eventos a los enlaces para mostrar los módulos
    sistemasLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        mostrarModulo(moduloSistemas);
    });

    soporteLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        mostrarModulo(moduloSoporte);});

    diseñoLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        mostrarModulo(moduloDiseño);
    });

    // Mostrar el primer módulo (por defecto) al cargar la página
    mostrarModulo(moduloSistemas); // Puedes cambiarlo a otro módulo según lo que quieras mostrar por defecto