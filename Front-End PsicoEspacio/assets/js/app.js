// app.js

// Espera a que el documento HTML se cargue completamente
document.addEventListener('DOMContentLoaded', function () {
    // Obtén una referencia al botón de inicio de sesión y al formulario
    const loginButton = document.getElementById('login-button');
    const formulario = document.querySelector('.formulario');

    // Agrega un evento de clic al botón de inicio de sesión
    loginButton.addEventListener('click', function () {
        // Cuando se hace clic en el botón, escala el formulario
        formulario.style.transform = 'scale(1.2)';
        formulario.style.transition = 'transform 0.5s ease';
    });
});
