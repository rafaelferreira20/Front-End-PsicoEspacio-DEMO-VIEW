function actualizarReloj() {
    const reloj = document.getElementById('reloj');
    const horaElement = document.getElementById('hora');
    const minutosElement = document.getElementById('minutos');
    const segundosElement = document.getElementById('segundos');

    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    horaElement.textContent = hora < 10 ? `0${hora}` : hora;
    minutosElement.textContent = minutos < 10 ? `0${minutos}` : minutos;
    segundosElement.textContent = segundos < 10 ? `0${segundos}` : segundos;
}

  // Actualizar el reloj cada segundo
    setInterval(actualizarReloj, 1000);

  // Llamar a la función para configurar el reloj inicialmente
    actualizarReloj();
