// Simula un tiempo de carga
function simulatePayment() {
    var loaderOverlay = document.getElementById('loaderOverlay');
    loaderOverlay.style.display = 'flex';

    setTimeout(function() {
        // Simula la finalización de la transacción
        loaderOverlay.style.display = 'none';
    }, 11000); // Cambia este valor al tiempo que desees simular
}

// Llama a la función al cargar la página (solo para demostración)
document.addEventListener("DOMContentLoaded", function() {
    //simulatePayment(); // Comentado para que no se llame automáticamente al cargar la página

    // Agrega un evento al botón "Pagar" para que llame a la función simulatePayment cuando se hace clic
    var pagarButton = document.getElementById('Pagar');
    if (pagarButton) {
        pagarButton.addEventListener('click', function() {
            simulatePayment();
        });
    }
});