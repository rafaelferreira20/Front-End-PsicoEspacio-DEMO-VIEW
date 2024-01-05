// Array para almacenar testimonios
let testimonios = [];

// Elementos del formulario y la lista de testimonios
const testimonialForm = document.getElementById('testimonial-form');
const testimonialList = document.getElementById('testimonial-list');

// Función para mostrar testimonios y respuestas
function displayTestimonials() {
    testimonialList.innerHTML = '';
    testimonios.forEach((testimonial, index) => {
        const testimonialItem = document.createElement('div');
        testimonialItem.classList.add('testimonial');
        testimonialItem.innerHTML = `
            <h3>${testimonial.name}</h3>
            <p>${testimonial.content}</p>
            <button onclick="replyToTestimonial(${index})">Responder</button>
        `;
        testimonialList.appendChild(testimonialItem);

        // Mostrar respuestas
        testimonial.replies.forEach((reply) => {
            const replyItem = document.createElement('div');
            replyItem.classList.add('reply');
            replyItem.innerHTML = `
                <p>${reply}</p>
            `;
            testimonialList.appendChild(replyItem);
        });
    });
}

// Función para agregar un testimonio
function addTestimonial(content) {
    testimonios.push({ content, replies: [] });
    displayTestimonials();
}


// Función para responder a un testimonio
function replyToTestimonial(index) {
    const reply = prompt('Escribe tu respuesta al testimonio:');
    if (reply) {
        testimonios[index].replies.push(reply);
        displayTestimonials();
    }
}

// Manejar el envío del formulario
testimonialForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const content = document.getElementById('testimonial').value;
    if (content) {
        addTestimonial(content);
        document.getElementById('testimonial').value = '';
        testimonialForm.style.transform = 'scale(1.1)';
        setTimeout(function () {
            testimonialForm.style.transform = 'scale(1)';
        }, 200);
    }
});


// Mostrar testimonios al cargar la página
displayTestimonials();

// En la función addTestimonial(content):
function addTestimonial(content) {
    testimonios.push({ content, replies: [] });
    displayTestimonials();
    
    // Obtén el último testimonio agregado
    const newTestimonial = testimonialList.lastChild;

    // Desplázate hacia el nuevo testimonio
    newTestimonial.scrollIntoView({ behavior: 'smooth' });
}
