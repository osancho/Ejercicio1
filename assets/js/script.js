window.onload = function() {
    const fechaActual = new Date(); 

    const opciones = { 
        month: 'short', 
        day: '2-digit', 
        year: 'numeric', 
        weekday: 'short' 
    };

    let fechaFormateada = new Intl.DateTimeFormat('en-US', opciones).format(fechaActual);

    const fechaSinComas = fechaFormateada.replace(/,/g, '');

    document.querySelector('time').textContent = `[${fechaSinComas}]`;
};